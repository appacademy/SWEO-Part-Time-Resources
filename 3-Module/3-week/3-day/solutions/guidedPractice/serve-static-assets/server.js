const http = require('http');
const fs = require("fs");

//!!START SILENT
function getContentType(fileName) {
  const ext = fileName.split(".")[1];
  let contentType = 'text/plain';
  switch (ext) {
    case "jpg":
    case "jpeg":
      contentType = "image/jpeg";
      break;
    case "png":
      contentType = "image/png";
      break;
    case "css":
      contentType = "text/css";
      break;
    default:
      contentType = "text/plain";
      break;
  }
  return contentType;
  // equivalent if-else-if statements:
  // if (ext === 'jpg' || ext === 'jpeg') {
  //   return "image/jpeg";
  // } else if (ext === "png") {
  //   return "image/png"
  // } else {
  //   return "text/plain"
  // }
}

//!!END
const server = http.createServer((req, res) => {
  //!!START
  // Phase 2
  if (req.method === "GET" && req.url.startsWith('/static')) {
    const assetPath = req.url.split("/static")[1]; // ["", "/index.html"] //=> "/index.html"
    try {
      const resBody = fs.readFileSync("./assets" + assetPath);
      res.statusCode = 200;
      res.setHeader("Content-Type", getContentType(assetPath));
      res.end(resBody);
      return;
    } catch {
      console.error("Cannot find asset", assetPath, "in assets folder");
      res.statusCode = 404;
      return res.end();
    }
  }

  // Phase 1
  const resBody = fs.readFileSync("./index.html");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(resBody);
  //!!END
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));