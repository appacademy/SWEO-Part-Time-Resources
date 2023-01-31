const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    console.log("TEST")
    console.log("TEST")
    return res.end('This is way more work');

  }
});

const port = 5001;

server.listen(port, () => console.log('Server is listening on port', port));
