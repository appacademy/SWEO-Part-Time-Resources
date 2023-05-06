const http = require('http');

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

const colors = [
  {
    colorId: 1,
    color: "red"
  }, {
    colorId: 2,
    color: "orange"
  }
];

const server = http.createServer((req, res) => {
  function renderError(error) {
    const resBody = JSON.stringify({ message: error.message });
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = error.statusCode || 400;
    res.write(resBody);
    return res.end();
  }

  let reqBody = '';

  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    if (reqBody && req.headers['content-type'] === "application/json") {
      req.body = JSON.parse(reqBody);
    } else {
      req.body = {};
    }

    if (req.method === "GET" && req.url === "/colors") {
      const resBody = JSON.stringify(Object.values(colors));
      res.setHeader('Content-Type', 'application/json');
      res.write(resBody);
      return res.end();
    }

    if (req.method === "POST" && req.url === "/colors") {
      const { color } = req.body;
      if (!color) return renderError(new BodyError());

      colors.push({ colorId: colors.length + 1, color });

      const resBody = JSON.stringify(colors[colors.length - 1]);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 201;
      res.write(resBody);
      return res.end();
    }

    return renderError(new NotFoundError('API Endpoint Not Found'));
  });
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log('Server is listening on port', port));
