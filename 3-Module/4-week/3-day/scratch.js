/*
API - Application Programming Interface
Abstracts away the inner workings of a package so you only have to worry about input and output.
Web API
Like a standard API but over the internet. We don't need to know the website's infrastructure, we only need to know how and where to send the request and what kind of response we'll get.
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
      req.body.key2 = Number(req.body.key2);
      req.body.key3 = JSON.parse(req.body.key3);
      console.log('URL ENCODED: ', req.body);
    }

    // Add the res.body to the res body as JSON
    res.end( JSON.stringify(req.body) );
  });
});

const port = 5000;
server.listen(port, () => console.log('Server is listening on port', port));
