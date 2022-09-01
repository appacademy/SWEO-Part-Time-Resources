const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // // console.log(res)
  // res.statusCode = 404;
  // res.setHeader('Content-type', 'text/plain');
  // res.write('Hey this went through okay');
  // res.write(', super okay actually');
  // res.end('!');
  if (req.method === 'GET' && req.url === '/splash'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('You have reached the splash page');
  } else if (req.method === 'GET' && req.url === '/cat') {
    const catImage = fs.readFileSync('./images/cat.png');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/png');
    return res.end(catImage);
    
  } else if (req.method === 'GET' && req.url === '/puppy') {
    const puppyImage = fs.readFileSync('./images/puppy.png');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/png');
    return res.end(puppyImage);
    
  }else {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No endpoint available for that route')
  }
})

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));