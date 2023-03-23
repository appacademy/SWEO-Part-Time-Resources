const http = require('http');

const server = http.createServer((req, res) => {
    let reqBody = '';
    req.on('data', (data) => {
        reqBody += data
    })

    req.on('end', () => {
        console.log(reqBody);
    })


    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css");
    res.write("<h1>Hello World</h1>")
    res.end()

})

const port = 3000;

server.listen(port, () => console.log(`Server is listening on port ${port}`))