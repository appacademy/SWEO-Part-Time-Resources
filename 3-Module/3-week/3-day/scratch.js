// making a server...
const http = require('http');

const server = http.createServer((req, res) => {
  // console.log('METHOD: ', req.method);
  // console.log('URL: ', req.url);
  // console.log('HEADERS: ', req.headers);
  // console.log('ON: ', req.on);
  // // - listens for an event on the req and triggers a callback to run when it's triggered
  // console.log('STATUS CODE: ', res.statusCode);
  // console.log('SET HEADER: ', res.setHeader);
  // // - sets a header name to a value
  // console.log('WRITE: ', res.write);
  // // - allows you to add to the body of the res
  // console.log('END: ', res.end);
  // // - allows you to add to the body of the res and send the res
  let reqBody = ''; //name=Fido&color=black&age=13&description=Cute+Dog%21
  // req.on("data", data => {
  //   reqBody += data;
  // });
  // req.on("end", () => {
  //   // req.body = parseBody(reqBody);
  //   // ... doing the things
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");
  //   res.write('Hello');
  //   res.end(' World!');
  // })
  // res.statusCode = 302;
  // res.setHeader("Content-Type", "text/plain");
  // res.write('Hello');
  // res.end(' World!');
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.write('Wowie mama');
    return res.end();
  } else {
    res.statusCode = 404;
    return res.end("Couldn't find the resource requested :)");
  }
});

/*
  1.split string on '&' ['name=Fido', 'color=black', 'age=13']
  2.split each ele on '=' [[name, Fido],[color, black],[age, 13]]
  3.replace '+' with ' ' [[description, Cute Dog%21]]
  4.decode percent encoding using `decodeURIComponent(encodedString)` [[description, Cute Dog!]]
  5.turn the matrix into an object {'name': 'Fido', 'color':'black'...}
*/
// connecting the server to a port...
const port = 5500;
server.listen(port, () => console.log(`Server is listening on port ${port}...`));
