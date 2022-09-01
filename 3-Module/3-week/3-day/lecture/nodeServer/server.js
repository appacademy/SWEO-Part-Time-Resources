const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // let reqBody = '';
  // req.on('data', (data) => {
  //   reqBody += data;
  // })
  // req.on('end', () => {
  //   console.log(reqBody);
  // })
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain')
  res.write('this is a res')
  res.write(' yeah so is this')
  res.end('!');

  // if (req.method === 'GET' && req.url === '/cat'){
  //   const catImage = fs.readFileSync('./images/cat.png');
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'image/png');
  //   // important to return when you're finished to exit the req/res cycle in the server.
  //   return res.end(catImage);
  // } else {
  //   res.statusCode = 500;
  //   res.setHeader('Content-Type', 'text/plain');
  //   res.end('no valid endpoint')
  // }

})

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));