// Your code here
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        const resBody = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World!</title>
            </head>
            <body>
            <h1>Hello theres!</h1>
            </body>
            </html>
        `;
        //! set the header of the respone to content-type and text/html, to
        //! let the browser know that its gonna parse the text into html.
        res.setHeader('Content-Type', 'text/html')

        res.end(resBody);
    }

})

const port = 5000;

server.listen(port, () => console.log('Server listening on ', port));
