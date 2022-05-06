const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
server = require('http').createServer((req, res) => {
    // your code for assembling the request body string...
    let body = ''
    req.on('data', (data) => {
        body+=data
    })
    req.on("end", () => {
        // your code for parsing the request body string into an object...
        req.body = parseBody(body)
        sendFormPage(req, res); // needs to be called even if the request doesn't have a body
    });
}).listen(5000, () => console.log("Listening", 5000))

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };