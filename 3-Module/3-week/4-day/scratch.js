const http = require('http');
const fs = require('fs');
const { formatComments, parseBody } = require('./parseInput');

const comments = [{ 'id': 1, 'content': 'Nice' }, { 'id': 2, 'content': 'Not Nice' }];
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url.includes('cat.jpg')) {
    const catImg = fs.readFileSync("./cat.jpg");

    res.statusCode = 200;
    res.setHeader("Content-Type", "image/jpeg");
    res.end(catImg);
    return;
  } else if (req.method === "POST" && req.url === "/") {
    let reqBody = '';
    req.on("data", data => reqBody += data);
    req.on("end", () => {
      let comment = parseBody(reqBody);
      comments.push(comment);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
      return;
    });
  } else {
    let html = fs.readFileSync("./index.html", "utf-8");
    html = html.replaceAll("#{comments}", formatComments(comments));
  
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(html);
    res.end();
  }
});
const port = 8080;
server.listen(port, () => console.log(`Server is listening on port ${port}...`));