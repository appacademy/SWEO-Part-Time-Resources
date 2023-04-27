const fs = require('fs');

let reqBody;

function sendFormPage(req, res) {
  if (req.method === "POST") {
    reqBody = req.body;
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  let previousSubmission = '<h2>Previously parsed request body:</h2>';
  if (reqBody) {
    previousSubmission += `<pre>${JSON.stringify(reqBody, null, 4)}</pre>`;
  } else {
    previousSubmission += "<p>no request with a body was sent to the server <b>OR</b> the server did not set <code>req.body</code>.<p>";
  }
  previousSubmission += `<div>(Re)submit the form to see the new parsed request body.</div>`;

  const htmlPage = fs.readFileSync("./index.html", 'utf-8');
  const resBody = htmlPage
    .replace(/#{previousSubmission}/g, previousSubmission);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(resBody);
}

module.exports = {
  sendFormPage
};