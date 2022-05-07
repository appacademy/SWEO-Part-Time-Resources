const http = require('http');
const fs = require('fs');

const { Player } = require('./game/class/player');
const { World } = require('./game/class/world');

const worldData = require('./game/data/basic-world-data');

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {
  //!!START SILENT
  /* =================== FUNCTION FOR EASY REDIRECT ===================== */
  function redirectTo(urlPath) {
    res.statusCode = 302;
    res.setHeader('Location', urlPath);
    return res.end();
  }
  //!!END

  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => { // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /
    //!!START SILENT
    if (req.method === "GET" && req.url === "/") {
      const htmlFile = fs.readFileSync("./views/new-player.html", "utf-8");
      const resBody = htmlFile
        .replace(/#{availableRooms}/g, world.availableRoomsToString());

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(resBody);
      return res.end();
    }
    //!!END

    // Phase 2: POST /player
    //!!START SILENT
    if (req.method === "POST" && req.url === "/player") {
      const { roomId, name } = req.body;
      player = new Player(name, world.rooms[roomId]);
      return redirectTo(`/rooms/${player.currentRoom.id}`);
    }

    // All route handlers after this require a player. If there is no player,
      // then the other route handlers should not be matched, and the
      // user should be redirected to the home page to create a new player.
    if (!player) {
      return redirectTo("/");
    }
    //!!END

    // Phase 3: GET /rooms/:roomId
    //!!START SILENT
    if (req.method === "GET" && req.url.startsWith("/rooms")) {
      const urlParts = req.url.split("/");
      const roomId = urlParts[2];
      if (urlParts.length === 3 && roomId) {
        if (roomId == player.currentRoom.id) {
          const room = player.currentRoom;

          const htmlFile = fs.readFileSync("./views/room.html", "utf-8");
          let reqBody = htmlFile
            .replace(/#{roomName}/g, room.name)
            .replace(/#{roomItems}/g, room.itemsToString())
            .replace(/#{inventory}/g, player.inventoryToString())
            .replace(/#{exits}/g, room.exitsToString());

          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.write(reqBody);
          return res.end();
        } else {
          return redirectTo(`/rooms/${player.currentRoom.id}`);
        }
      }
    }
    //!!END

    // Phase 4: GET /rooms/:roomId/:direction
    //!!START SILENT
    if (req.method === "GET" && req.url.startsWith("/rooms")) {
      const urlParts = req.url.split("/");
      const roomId = urlParts[2];
      const direction = urlParts[3];
      if (urlParts.length === 4 && roomId && direction) {
        if (roomId == player.currentRoom.id) {
          try {
            const nextRoom = player.move(direction[0]);
            return redirectTo(`/rooms/${nextRoom.id}`);
          } catch (error) {
            return redirectTo(`/rooms/${roomId}`);
          }
        } else {
          redirectTo(`/rooms/${player.currentRoom.id}`);
        }
      }
    }
    //!!END

    // Phase 5: POST /items/:itemId/:action
    //!!START SILENT
    if (req.method === "POST" && req.url.startsWith("/items")) {
      const urlParts = req.url.split("/");
      const itemId = urlParts[2];
      const action = urlParts[3];
      if (urlParts.length === 4 && itemId && action) {
        try {
          switch(action) {
            // POST /items/:itemId/eat
            case "eat":
              player.eatItem(Number(itemId));
              break;
            // POST /items/:itemId/take
            case "take":
              player.takeItem(Number(itemId));
              break;
            // POST /items/:itemId/drop
            case "drop":
              player.dropItem(Number(itemId));
              break;
            default:
              throw new Error('Cannot perform that action');
          }
        } catch (e) {
          res.statusCode = 404;
          res.write(renderError(e.message));
          res.end();
          return;
        }
      }
      return redirectTo(`/rooms/${player.currentRoom.id}`);
    }
    //!!END

    // Phase 6: Redirect if no matching route handlers
    //!!START SILENT
    return redirectTo(`/rooms/${player.currentRoom.id}`);
    //!!END
  })
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));