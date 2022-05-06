const { readSync } = require('fs');
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
    // if(req.method === "GET" && req.url === '/'){
    //   res.statusCode = 200
    //   res.setHeader("Content-Type", "text/plain")
    //   // res.write('Dog Club')
    //   return res.end('Dog Club')
    // }
    if(req.method === "GET" && req.url === '/'){
      res.statusCode = 302
      res.setHeader("Location", "/dogs/100")
      // res.write('Dog Club')
      return res.end()
    }
    if(req.method === "GET" && req.url === '/dogs'){
      res.statusCode = 200
      res.setHeader("Content-Type", "text/plain")
      // res.write('Dog Club')
      return res.end('Dogs Index')
    }
    if(req.url.startsWith('/dogs') && req.url.split('/').length === '/dogs/:dogid'.split('/').length && req.method ==='POST'){
      let id = req.url.split('/')[2]
      console.log(id)
    }
    if(req.url.startsWith('/dogs') && req.url.split('/').length === '/dogs/:dogid'.split('/').length && req.method ==='GET'){
      let id = req.url.split('/')[2]
      res.statusCode = 200
      res.setHeader('Content-Type' , 'text/plain')
      return res.end(`Dog details for dogId: ${id} this dog is cool`)
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