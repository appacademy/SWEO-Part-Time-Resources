const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require('http');
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    let reqBody = ''

    req.on('data', (data) => {
        reqBody += data
    })

    req.on('end', () => {
        //!parse the body here
        console.log(reqBody);
        if (reqBody) {
            req.body = parseBody(reqBody)
        }

        sendFormPage(req, res)
    })
})

const port = 5000;

server.listen(port, () => console.log("Server is listening on port ", port))

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
