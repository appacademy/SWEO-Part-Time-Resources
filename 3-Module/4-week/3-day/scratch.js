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
      console.log('JSON: ', req.body);
    }
    if (reqBody && reqType === "application/x-www-form-urlencoded") {
      req.body = parseForm(reqBody);
      console.log('URL ENCODED: ', req.body);
    }

    // Add the res.body to the res body as JSON
    
  });
});

const port = 5000;
server.listen(port, () => console.log('Server is listening on port', port));
