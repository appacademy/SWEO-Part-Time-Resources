const http = require('http');

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
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
      console.log(req.body);
    }
    //!!ADD
    // // Do not edit above this line
    //!!END_ADD

    // define route handlers here
    //!!START SILENT
    // GET /
    if (req.method === 'GET' && req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dog Club');
    }
    // GET /dogs
    if (req.method === 'GET' && req.url === '/dogs') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dogs index');
    }
    // GET /dogs/new
    if (req.method === 'GET' && req.url === '/dogs/new') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('Dog create form page');
      return res.end();
    }
    // GET /dogs/:dogId // ex: /dogs/3
    if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/'); // ['', 'dogs', '3']
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Dog details for dogId: ');
        res.write(dogId);
        return res.end();
      }
    }
    // POST /dogs
    if (req.method === 'POST' && req.url === '/dogs') {
      res.statusCode = 302;
      res.setHeader('Location', '/dogs/' + getNewDogId());
      return res.end();
    }
    // POST /dogs/:dogId
    if (req.method === 'POST' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        res.statusCode = 302;
        res.setHeader('Location', '/dogs/' + dogId);
        return res.end();
      }
    }
    // GET /dogs/:dogId/edit // /dogs/3/edit
    if (req.method === 'GET' && req.url.slice(0, 6) === '/dogs/') {
      const urlParts = req.url.split('/');
      if (urlParts.length === 4 && urlParts[3] === 'edit') {
        const dogId = urlParts[2];
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Dog edit form page for dogId: ');
        res.write(dogId);
        return res.end();
      }
    }
    //!!END

    //!!ADD
    // // Do not edit below this line
    //!!END_ADD
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));