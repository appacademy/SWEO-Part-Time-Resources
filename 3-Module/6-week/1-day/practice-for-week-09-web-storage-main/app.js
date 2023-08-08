const http = require("http");
const { readFileSync } = require("fs");
const path = require("path");
// Create a server using `http`
const server = http.createServer((req, res) => {
  console.log(`Incoming Request - Method: ${req.method} | URL: ${req.url}`);
  // Process the body of the request
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });
  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }
    // Home Page
    if (req.method === "GET" && req.url === "/") {
      const resBody = readFileSync("./public/index.html");
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(resBody);
      return;
    }
    // Serving Static Assets
    const ext = path.extname(req.url);
    if (req.method === "GET" && ext) {
      try {
        const resBody = readFileSync('.' + "/public" + req.url);
        res.statusCode = 200;
        if (ext === ".jpg" || ext === ".jpeg") {
          res.setHeader("Content-Type", "image/jpeg");
        } else if (ext === ".css") {
          res.setHeader("Content-Type", "text/css");
        } else if (ext === ".js") {
          res.setHeader("Content-Type", "text/javascript");
        }
        res.end(resBody);
        return;
      } catch {
        console.error(
          "Cannot find asset",
          path.basename(req.url),
          "in assets folder"
        );
      }
    }
    // Page Not Found
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    const resBody = "Page Not Found";
    res.write(resBody);
    res.end();
  });
});
// Set the port to 5000
const port = 5000;
// Tell the port to listen for requests on localhost:5000
server.listen(port, () => console.log("Web Storage API Practice is running on port", port));