const http = require('http');

const server = http.createServer((req, res) => {
    let reqBody = '';
    req.on('data', (data) => {
        reqBody += data;
    })

    req.on('end', () => {
        console.log(reqBody);
    })

    res.statusCode = 500;
    res.setHeader("Content-Type", "text/css")
    res.write("hello world")
    res.end("!")
});

const port = 3000;

server.listen(port, () => console.log(`Server is running on port ${port}`))