const http = require('http');
const PORT = 5000;

const server = http.createServer((req, res) => {
  if(req.method === 'GET' && req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Home Page')
  }

  //other route handlers
  if(req.method === 'POST' && req.url === '/puppy'){
    res.status = 201;
    res.setHeader = 'text/html';

    return res.end(
      `
      <div style="background-color: blue">
        <h1>New Puppy!</h1>
        <p>You are the 1,000,000th visitor and win a free puppy!!!</p>
      </div>
      `
    )
  }

  //the end === didnt find route
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('404 page not found');
});

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
