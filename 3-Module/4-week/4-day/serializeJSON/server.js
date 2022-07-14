const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    // Parse the body of the request as JSON if Content-Type header is
    // application/json
    // Parse the body of the request as x-www-form-urlencoded if Content-Type
    // header is x-www-form-urlencoded

    //? switch case
    if (reqBody) {
      switch (req.headers['content-type']) {
        case 'application/json':
          console.log(req.headers);
          console.log(req.headers['content-type']);
          console.log(req.headers['Content-Type']);
          req.body = JSON.parse(reqBody);
          break;

        case 'application/x-www-form-urlencoded':
          req.body = reqBody
            .split('&')
            .map((keyValuePair) => keyValuePair.split('='))
            .map(([key, value]) => [key, value.replace(/\+/g, ' ')])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;

        default:
          break;
      }

      // Log the body of the request to the terminal
      console.log(req.body);
    }

    //? if else
    // if (reqBody) {
    //   if (req.headers['content-type'] === 'application/json') {
    //     req.body = JSON.parse(reqBody);
    //   } else if (
    //     req.headers['content-type'] === 'application/x-www-form-urlencoded'
    //   ) {
    //     req.body = reqBody
    //       .split('&')
    //       .map((keyValuePair) => keyValuePair.split('='))
    //       .map(([key, value]) => [key, value.replace(/\+/g, ' ')])
    //       .map(([key, value]) => [key, decodeURIComponent(value)])
    //       .reduce((acc, [key, value]) => {
    //         acc[key] = value;
    //         return acc;
    //       }, {});
    //   }

    //   // Log the body of the request to the terminal
    //   console.log(req.body);
    // }

    const resBody = {
      Hello: 'World!',
    };

    //! Testing for Scot
    // if (req.method === 'POST' && req.url === '/test') {
    //   const otherBody = {
    //     Test: 'For caps',
    //   };
    //   res.statusCode = 200;
    //   res.setHeader('Content-Type', 'application/json');
    //   res.write(JSON.stringify(otherBody));
    //   return res.end();
    // }

    // Return the `resBody` object as JSON in the body of the response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(resBody));
    return res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
