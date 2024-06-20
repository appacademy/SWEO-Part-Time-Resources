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
    // Do not edit above this line

    // define route handlers here

    if (req.url === '/' && req.method === 'GET') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dog Club');
    }


    if (req.url === '/dogs/new' && req.method === 'GET') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dog create form page')
    }

    if (req.url === '/dogs' && req.method === 'GET') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dogs Index')
    }

    //! /dogs/:dogId
    if (req.url.startsWith('/dogs') && req.method === 'GET') {
      //! parse the url by splitting with "/"
      const parsedUrl = req.url.split('/');
      console.log(parsedUrl);
      //! then check if the url has the correct amount of parts
      //! IE /dogs/:dogId should be split into 3 elements including the empty space.
      if (parsedUrl.length === 3) {
        const dogId = Number(parsedUrl[2]);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        return res.end(`Dog details for dogId: ${dogId}`)
      }
    }


//! /dogs/:dogId/edit
    if (req.url.startsWith('/dogs') && req.method === 'GET') {
      const parsedUrl = req.url.split('/');
      if (parsedUrl.length === 4 && parsedUrl[3] === 'edit') {
        const dogId = Number(parsedUrl[2])
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        return res.end(`Dog edit form page for dogId: ${dogId}`)
      }

    }

  //! /dogs/:dogId - POST
    if (req.url.startsWith('/dogs') && req.method === 'POST') {
      const paredUrl = req.url.split('/');
      if (paredUrl.length === 3) {
        const dogId = Number(paredUrl[2])
        res.setHeader('Location', `/dogs/${dogId}`)
        return res.end();
      }
    }

    //! /dogs -POST
    if (req.url === '/dogs' && req.method === 'POST') {
      const newDogId = getNewDogId();
      res.statusCode = 302;
      res.setHeader('Location', `/dogs/${newDogId}`);

      return res.end();

    }


    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
