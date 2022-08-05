const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/



const http = require('http');

// console.log("-----http:", http);
server = http.createServer((req, res) => {
    console.log("the request has been received from out server");
    console.log(req.method, req.url)

    // take res and see if we can use a property to then close our response and give it back to the browser
    // console.log(res.)

    // need to attach to res a STATUS CODE
    res.statusCode = 200;

    // need to attach headers to the res object
    res.setHeader("Content-Type", "text/html")

    // write content to the body
    res.write("west coast best coast");

    // end the response and disconnect
    res.end();

});


const port = 5000;
server.listen(port, () => console.log("Server is listening on port:", port));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };