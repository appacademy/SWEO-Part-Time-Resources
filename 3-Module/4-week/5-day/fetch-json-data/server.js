const http = require('http');
let data= {
  "Hello": "World!"
};
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // Parse the body of the request as JSON if Content-Type header is application/json

    if (reqBody) {
      // Determine if the header is application/json
      if (req.headers['content-type'] === "application/json") {
        //----------YOUR CODE HERE-----------:
        //turn the `reqBody` from JSON to data and then log it. Hint: use a JSON method to help ya out
        let reqData = JSON.parse(reqBody); //extra data from JSON string (parsing it)
        for(key in reqData){
          data[key] = reqData[key];
        }
        console.log("request data from client:", data);
      }
    }


    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    //----------YOUR CODE HERE-----------:
    // use res.write to write a response back to the client with the resBody turned into JSON (what is the opposite of parse).
    res.write(JSON.stringify(data))
    return res.end();

    // now make a request with postman! You should see your request body logged in the server output if it's json
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));




