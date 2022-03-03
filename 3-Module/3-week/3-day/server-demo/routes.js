const http = require('http');

const server =  http.createServer((req, res) => {
  // method and url -> endpoint
  if(req.method === "GET" && req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Home Page')
  };

  if(req.method === 'POST' && req.url === '/puppy'){
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/html');
    return res.end(
      `<div style="background-color: green">
        <h1>New Puppy!</h1>
        <p>You are the 1000th visitor, you get a free puppy!</p>
      </div>`
    )
  };

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  return res.end('404 Page Not Found');
});

const port = 5000;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
