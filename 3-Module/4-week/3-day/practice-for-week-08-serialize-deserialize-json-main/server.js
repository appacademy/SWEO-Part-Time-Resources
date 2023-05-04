const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // Parse the body of the request as JSON if Content-Type header is
      // application/json
    // Parse the body of the request as x-www-form-urlencoded if Content-Type
      // header is x-www-form-urlencoded

	if (reqBody) {
		req.body = JSON.parse(reqBody)
	}
    const resBody = {
      "Hello": "World!"
    };

    // Return the `resBody` object as JSON in the body of the response
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.write(JSON.stringify(resBody))
	return res.end()
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));


