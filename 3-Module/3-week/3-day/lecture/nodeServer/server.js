const http = require('http');
// const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req)
  // console.log(res)

  // Parsing the urlencoded body of the req
  // let reqBody = '';
  // req.on('data', (data) => {
  //   reqBody += data;
  // })
  // req.on('end', () => {
  //   // get each pair
  //   let pairs = reqBody.split('&') 
  //   // split each pair into a key and value in an arr
  //   let keyvalues = pairs.map(pair => pair.split('='))
  //   // get rid of the %'s 
  //   let decoded = keyvalues.map(kv => kv.map(item => decodeURIComponent(item)))
  //   // create an object with the kvps
  //   let kvpObj = {}
  //   decoded.forEach(kvp => {
  //     kvpObj[kvp[0]] = kvp[1];
  //   })
  //   // console.log(kvpObj)
  // })

  // Sending a response
  // setting the status code
  // res.statusCode = 200;
  // setting a header
  // res.setHeader('Content-Type', 'text/css')
  // console.log(res.statusCode, res.getHeaders())
  // add to body, then add a final ! and send the response
  // res.write('Hello');
  // res.write(' ');
  // res.write('World');
  // res.end('!');

  // writing our first endpoints
  // if (req.method === 'GET' && req.url === '/'){
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  //   return res.end('Splash Page');
  // } else if (req.method === 'POST' && req.url === '/cat') {
  //   const catImage = fs.readFileSync('./images/cat.png');

  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'image/png');
  //   res.end(catImage);
  // } else {
  //   res.statusCode = 500;
  //   res.setHeader('Content-Type', 'img/png');
  //   return res.end('No route handlers available')
  // }
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));