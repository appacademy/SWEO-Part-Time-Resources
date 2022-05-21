const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require('http');

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const server = http.createServer((req, res) => {
  // your code for assembling the request body string...
  let body = ''
  req.on("data", (data) => {
    console.log("HEYYYYYYYY", data)
    body += data
  })
  req.on("end", () => {
    // your code for parsing the request body string into an object...
    req.body = parseBody(body)
    console.log(req.body)

    sendFormPage(req, res); // needs to be called even if the request doesn't have a body
  });
}).listen(5000, () => console.log('Listening on port ', 5000))

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };