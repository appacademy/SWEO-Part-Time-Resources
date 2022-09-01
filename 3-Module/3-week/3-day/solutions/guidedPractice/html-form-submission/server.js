const http = require("http");
const fs = require('fs');

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
    default:
      return "text/plain";
  }
}

const Cat = require("./cat");
const Dog = require("./dog");

let cat;
let dog;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.method === "GET" && req.url.startsWith('/assets')) {
    const assetPath = req.url.split("/assets")[1];
    try {
      const resBody = fs.readFileSync("./assets" + assetPath);
      res.statusCode = 200;
      res.setHeader("Content-Type", getContentType(assetPath));
      res.end(resBody);
      return;
    } catch {
      console.error("Cannot find asset", assetPath, "in assets folder");
      res.statusCode = 404;
      res.end();
      return;
    }
  }

  if (req.method === "GET" && req.url === "/") {
    console.log('Created cat and dog info:', { cat, dog });
    let htmlPage = fs.readFileSync("./views/index.html", 'utf-8');
    const resBody = htmlPage
      .replace(/#{cat}/g, cat ? `
        <div>
          <h2>Created Cat:</h2>
          <h3>Name: ${cat.name}</h3>
          <div>Pattern: ${cat.pattern}</div>
          <div>Size: ${cat.size} lbs</div>
          <div>Description: ${cat.description}</div>
        </div>
      ` : "<div>No cat created yet!</div>")
      .replace(/#{dog}/g, dog ? `
        <div>
          <h2>Created Dog:</h2>
          <h3>Name: ${dog.name}</h3>
          <div>Pattern: ${dog.color}</div>
          <div>Size: ${dog.age} years old</div>
          <div>Description: ${dog.description}</div>
        </div>
      ` : "<div>No dog created yet!</div>");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(resBody);
    return;
  }

  if (req.method === "GET" && req.url === "/cat") {
    let resBody = fs.readFileSync("./views/cat-form.html");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(resBody);
    return;
  }

  if (req.method === "GET" && req.url === "/dog") {
    let resBody = fs.readFileSync("./views/dog-form.html");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(resBody);
    return;
  }

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
      console.log(req.body);
    }

    //!!START
    if (req.method === "POST" && req.url === "/cat") {
      const { name, pattern, size, description } = req.body;

      cat = new Cat({ name, pattern, size, description });
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
      return;
    }

    if (req.method === "POST" && req.url === "/dog") {
      const { name, color, age, description } = req.body;

      dog = new Dog({ name, color, age, description });
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
      return;
    }
    //!!END

    res.statusCode = 404;
    res.end("Page Not Found");
    return;
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
