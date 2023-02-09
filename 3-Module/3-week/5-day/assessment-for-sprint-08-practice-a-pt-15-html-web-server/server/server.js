const http = require('http');
const fs = require('fs');
const path = require('path');

class BodyError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BodyError);
    }

    this.message = this.message || "Something is wrong with the body";
    this.statusCode = 400;
    this.name = 'BodyError';
  }
}

class NotFoundError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }

    this.message = this.message || "Not Found";
    this.statusCode = 404;
    this.name = 'NotFoundError';
  }
}

const colors = ["red", "orange"];

const server = http.createServer((req, res) => {
  function redirectTo(urlPath) {
    res.statusCode = 302;
    res.setHeader('Location', urlPath);
    return res.end();
  }

  function renderError(error) {
    const htmlFile = fs.readFileSync(path.join(__dirname, "views/error.html"), "utf-8");
    const resBody = htmlFile
        .replace(/#{message}/g, error.message);

    res.setHeader('Content-Type', 'text/html');
    res.statusCode = error.statusCode || 400;
    res.write(resBody);
    return res.end();
  }

  let reqBody = '';
  
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    if (reqBody && req.headers['content-type'] === "application/x-www-form-urlencoded") {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    } else {
      req.body = {};
    }

    if (req.method === "GET" && req.url === "/colors") {
      const htmlFile = fs.readFileSync(path.join(__dirname, "views/colors-index.html"), "utf-8");
      const resBody = htmlFile
        .replace(
          /#{colors}/g,
          Object.values(colors).map(color => `
            <li>${color}</li>
          `).join('</n>')
        );

      res.setHeader('Content-Type', 'text/html');
      res.write(resBody);
      return res.end();
    }

    if (req.method === "POST" && req.url === "/colors") {
      const { color } = req.body;
      if (!color) return renderError(new BodyError());

      colors.push(color)

      return redirectTo(`/colors`);
    }

    return renderError(new NotFoundError('Page Not Found'));
  });
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log('Server is listening on port', port));