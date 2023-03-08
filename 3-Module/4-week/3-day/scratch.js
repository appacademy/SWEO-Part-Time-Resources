/*
API - Application Programming Interface
Abstracts away the inner workings of a package and allows you to focus on input and output.
Web API is like a standard API except its over the internet.
You only need to worry about the request and response but not the websites' inner workings.
*/

const http = require('http');
const parseForm = require("./parseForm");

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });
  req.on("end", () => {
    let reqType = req.headers['content-type']
    if (reqBody && reqType === "application/json") {
      //Parse Our JSON
      req.body = JSON.parse(reqBody);
      console.log('JSON: ', req.body);
    }
    if (reqBody && reqType === "application/x-www-form-urlencoded") {
      req.body = parseForm(reqBody);
      // "key1=wow&key2=32&key3=%5B18%2C22%2C16%5D"
      console.log('URL ENCODED: ', req.body);
    }

    // Add the res.body to the res body as JSON
    res.end(JSON.stringify(req.body))
  });
});

const port = 5000;
server.listen(port, () => console.log('Server is listening on port', port));