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
      // if(req.headers['content-type'] === 'application/json'){
      //   let json = JSON.parse(reqBody)
      //   json.Array.forEach(element => {
      //     console.log(element)
      //   });
      //   console.log(json)
      // }
    // Parse the body of the request as x-www-form-urlencoded if Content-Type
      // header is x-www-form-urlencoded
    if (req.headers['content-type'] === 'x-www-form-urlencoded') {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});

      // Log the body of the request to the terminal
      console.log(req.body);
    }

    let num = 1
    let arr = [1,2,3,4,5,6]
    const resBody = {
      "Hello": "World!",
      one : num,
      arr :  arr
    };
    // Return the `resBody` object as JSON in the body of the response
    res.write(JSON.stringify(resBody))
    res.end()
    // console.log("Regular object", resBody)
    // console.log("converted to json", JSON.stringify(resBody))
    // console.log("parsed again", JSON.parse(JSON.stringify(resBody)))


  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));