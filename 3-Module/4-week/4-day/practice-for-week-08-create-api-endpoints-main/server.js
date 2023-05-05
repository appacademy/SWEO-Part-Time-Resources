const http = require('http');

const dogs = [
  {
    dogId: 1,
    name: "Fluffy",
    age: 2
  }
];

let nextDogId = 2;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => { // request is finished assembly the entire request body
    // Parsing the body of the request depending on the Content-Type header
    if (reqBody) {
      switch (req.headers['content-type']) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ======================== ROUTE HANDLERS ======================== */

    // GET /dogs
    if (req.method === 'GET' && req.url === '/dogs') {

		res.setHeader("Content-Type", "application/json");
		return res.end(JSON.stringify(dogs));
    //   return res.end();
    }

    // GET /dogs/:dogId
    if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/'); // ['', 'dogs', '1']
      let dogBody
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        // Your code here
        res.setHeader("Content-Type", "application/json")
        const currDog = dogs.find(dog => dog.dogId === parseInt(dogId))
        dogBody = JSON.stringify(currDog)
      }
      return res.end(dogBody);
    }

    // POST /dogs
    if (req.method === 'POST' && req.url === '/dogs') {
    //   const { name, age } = req.body;
      // Your code here
      const newDog = req.body;
      newDog.dogId = getNewDogId();
      dogs.push(newDog);
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 201;
      return res.end(JSON.stringify(newDog));
    }

    // PUT or PATCH /dogs/:dogId
    if ((req.method === 'PUT' || req.method === 'PATCH')  && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
	  const { name, age } = req.body;
      let dogBody
      if (urlParts.length === 3) {
        const dogId = parseInt(urlParts[2]);
        // Your code here
        res.setHeader("Content-Type", "application/json")
        const updatedDog = {dogId, name, age}
        const dogIndex = dogs.findIndex(dog => dog.dogId === parseInt(dogId))
        dogs[dogIndex] = updatedDog
        dogBody = JSON.stringify(updatedDog)
      }
      return res.end(dogBody);
    }

    // DELETE /dogs/:dogId
    if (req.method === 'DELETE' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      let deleteMsg
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        // Your code here
        const dogIndex = dogs.findIndex(dog => dog.dogId === parseInt(dogId))
        dogs.splice(dogIndex, 1)
        res.setHeader("Content-Type", "application/json")
        deleteMsg = JSON.stringify({message: "Successfully deleted"})
        console.log("OUHWEUFBIUWEBIFUHBWE", deleteMsg)
      }
      return res.end(deleteMsg);
    }

    // No matching endpoint
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    return res.end('Endpoint not found');
  });

});


if (require.main === module) {
    const port = 8000;
    server.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = server;
}
