const http = require('http');
const fs = require('fs');
const {formatComments, parseBody} = require('./parseInput');

const comments = [{'id': 1, 'content':'Nice'}, {'id': 2, 'content': 'Not Nice'}];
const server = http.createServer((req, res) => {
  if (req.url.endsWith('.js')) {
    const js = fs.readFileSync('./domscripts.js');
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/javascript");
    return res.end(js);
  }
  if (req.method === 'POST' && req.url === '/') {
    let reqBody = '';
    req.on("data", data => {
      reqBody += data;
    });
    req.on("end", () => {
      let comment = parseBody(reqBody);
      comments.push(comment);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    })
  } else if (req.method === 'GET' && req.url === '/') {
    const htmlDoc = fs.readFileSync('./index.html', 'utf-8');
    let commentText = formatComments(comments);
    let html = htmlDoc.replaceAll(/#{comments}/g, commentText);
  
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Location could not be found...");
  }
});
const port = 8080;
server.listen(port, () => console.log(`Server is listening on port ${port}...`));