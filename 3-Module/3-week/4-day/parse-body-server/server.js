const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/
const http = require('http');
// console.log("-----http:", http);
server = http.createServer((req,res)=>{

    // ------------request object------------
    // console.log(res.)
    console.log(req.method, req.url)
    // console.log("headers:", req.headers)
    
    // ------------response object------------
    // we can add things to this res object that will then contain key value pairs of information that later we can send back to the client
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("april east coast is the coolest\n")
    res.write("april west coast is not the coolest")
    res.end();
})

const port = 5000;
server.listen(port, ()=> console.log("The server is now listening on port:", port));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };