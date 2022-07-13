const http = require('http');
const fs = require("fs");


const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.method === "GET" && req.url === "/") {
        const resBody = fs.readFileSync("index.html", "utf-8");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(resBody);
    }

    if (req.method === "GET" && req.url === "/main.css") {
        const resBody = fs.readFileSync("./main.css");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        return res.end(resBody);
    }

    if (req.method === "GET" && req.url === "/index.js") {
        const resBody = fs.readFileSync("./index.js");
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/javascript");
        return res.end(resBody);
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Page not found</h1>");
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
