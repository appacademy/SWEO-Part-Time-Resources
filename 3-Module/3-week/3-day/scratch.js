// making a server...
const http = require('http');
const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log('METHOD: ', req.method);
  // console.log('URL: ', req.url);
  // console.log('HEADERS: ', req.headers);
  // console.log('ON: ', req.on);
  // console.log(res);
  // console.log('STATUS CODE: ', res.statusCode);
  // console.log('SET HEADER: ', res.setHeader);
  // // sets a header name to a value
  // console.log('WRITE: ', res.write);
  // // allows you to add to the body of the req
  // console.log('END: ', res.end);
  // allows you to add to the body of the req and send the res

  // PARSING A REQUEST BODY
  let requestObj = {};
  let string = 'name=Fido&color=red&age=32&description=Cute+Dog%21&isChipped=false'
  string = string.split('&');
  let kvpairs = [];
  string.forEach(kv => {
    let kvPair = kv.split('=');
    kvpairs.push(kvPair);
  });
  kvpairs.forEach(pair => {
    let val = pair[1];
    val = val.replace('+', ' ');
    val = decodeURIComponent(val);
    pair[1] = val;
  })
  kvpairs.forEach(pair => {
    requestObj[pair[0]] = pair[1];
  })
  console.log(requestObj);
  // if (req.method === "GET" && req.url === '/') {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");
  //   res.write("Hello");
  //   res.write("Goodbye");
  //   res.end(" World!");
  // } else {
  //   res.statusCode = 404;
  //   res.setHeader("Content-Type", "text/plain");
  //   res.end("That's not a page or invalid method");
  // }
});
// connecting the server to a port...
const port = 8080;

server.listen(port, () => console.log(`Server is listening on port ${port}...`));
