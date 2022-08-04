
let server;


const http = require('http');

server = http.createServer((req, res) => {
    const responseBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello there!</h1>
    </body>
    </html>
    `;
    res.statusCode = 200;
    // res.statusCode = 418; //try this out courtesy of Christopher
    res.setHeader("Content-Type", "text/html")

    // we can attach any header as key and value but note they cannot have space in them. 
    res.setHeader("april-cohort", "april cohort is cool")

    res.write(responseBody);
    res.end();
})

const port = 5000;
server.listen(port, () => console.log("The server is now listening on port:", port));


module.exports = { server };