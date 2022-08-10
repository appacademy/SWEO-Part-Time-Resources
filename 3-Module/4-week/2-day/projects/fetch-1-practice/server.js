const http = require('http');
const fs = require("fs");
const{ htmlRouter, dogs} = require("./starterRouter")

function getContentType(fileName) {
  const ext = fileName.split(".")[1];
  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "css":
      return "text/css";
    case "js":
      return "text/javascript";
    default:
      return "text/plain";
  }
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  if (req.method === "GET" && req.url.startsWith('/assets')) {
    const assetPath = req.url.split("/assets")[1];
    try {
      const resBody = fs.readFileSync("./assets" + assetPath);
      res.statusCode = 200;
      res.setHeader("Content-Type", getContentType(assetPath));
      res.write(resBody);
      return res.end();
    } catch {
      console.error("Cannot find asset", assetPath, "in assets folder");
    }
  }

  if (req.method === "POST" && /dogs\/\d+\/delete/.test(req.url)) {
    const [_,urlParts] = req.url.split("/dogs/");
    const [id,__] = urlParts.split("/");
    if(req.headers.auth !== "ckyut5wau0000jyv5bsrud90y") {
      console.log("unauth header")
      const htmlPage = fs.readFileSync("./views/error.html", 'utf-8');
      const resBody = htmlPage
      .replace(/#{message}/g, 'Unauthorized request, check your request headers');
        res.statusCode = 401;
        res.setHeader("Content-Type", "text/html");
        res.write(resBody);
        return res.end();
    }
    const idxToDelete = dogs.findIndex(dog => dog.dogId == id);
    dogs.splice(idxToDelete, 1)
    res.statusCode = 302;
    res.setHeader('Location', '/dogs');
    return res.end();
  }

  if (req.method === "GET" && req.url === "/api/dogs") {
    res.setHeader("Content-Type","application/json")
    res.write(JSON.stringify(dogs))
    return res.end()
  }
  return htmlRouter(req, res)
});

const port = 5001;

server.listen(port, () => console.log('Server is listening on port', port));