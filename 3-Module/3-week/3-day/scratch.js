const http = require('http');

const server = http.createServer((req, res) => {


    if (req.method === 'GET' && req.url === '/cats') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Here are some cats!');
    }




    let reqBody = '';

    req.on('data', (data) => {
        reqBody += data;
    });

    req.on('end', () => {
        console.log(reqBody);
    })

    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Lastly');

});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));