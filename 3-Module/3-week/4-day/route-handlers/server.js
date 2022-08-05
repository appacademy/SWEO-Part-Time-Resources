const http = require('http');

const dogs = require('dogs')

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

    // GET /
    if(req.method === "GET" && req.url === "/"){
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain")
      res.write("dog club");
      res.end();
    }


    // GET /dogs
    if(req.method === "GET" && req.url === "/dogs"){
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");

      //Bonus: try to see if you can send the "dogs" package data to the client meaning the text image of the dog sent to the browser
      // npm init -y
      // npm install dogs
      // check the npm website to see how the package "dogs" work.
      // then try sending any of type of dogs back up to the server!
      res.write(`${dogs.snoopy()} \n`)
      res.write(`${dogs.bulldog()} \n`)
      res.write(`${dogs.dog()} \n`)
        
      res.end();
    }


    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    else{
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('No matching route handler found for this endpoint');
    }

  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));