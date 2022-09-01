const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

//!!START
const http = require("http");

server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      // console.log("  unparsed req body:", reqBody);
      req.body = parseBody(reqBody);
      // console.log("    parsed req body:", req.body);
    }

    sendFormPage(req, res);
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
//!!END

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
