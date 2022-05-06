# Parse the Body of a Request Phase 3 - Read the Body of the Request

In this phase, you will convert a percent-encoded request body into a JavaScript
object.

Reference the _Parsing the Body of the Request_ reading for the steps to take to
parse the body of a typical HTML form submission request with a `Content-Type`
header of `application/x-www-form-urlencoded`. You will implement these steps in
the server that you created and log the parsed request body to your terminal.

Take a look at the __index.html__ file. When the form in the file is submitted
without changing the fields, it will make a `POST /` request with the following
form data as the request body:

| Field Name | Value       |
| ---------- | ----------- |
| username   | azure green |
| password   | password!   |

When the above request body gets to the server by the browser, the server will
get the body in the form of a string,
"username=azure+green&password=password%21". The spaces in the values get
replaced with a plus symbol, `+`, and the symbols in the values get replaced by
a percent-encoded value (the exclamation mark get percent-encoded into a
`%21`).

## Parsing the request body

You will use your knowledge of `String`, `Array`, and `Object` manipulation to
turn the request body string of "username=azure+green&password=password%21" into
a JavaScript object with the following key-value pairs:

```js
{
  username: "azure green",
  password: "password!"
}
```

**Review the steps to parse the request body in the
_Parsing the Body of the Request_ reading.**

There are six functions laid out in __parse-body.js__ that you need to fill out.
Each function breaks down the different steps of parsing the request body string
to eventually turn it into an object. Read and run the following the test specs
in the __test/phase-3-parse-body-spec.js__ file for hints on what each of the
functions in the file should return.

```shell
npm test test/phase-3-parse-body-spec.js
```

Tip: You can use the following functions to aid you:

- [`String.split`] - to split a string into an array by a given delimiter
- [`String.replace`] - to replace the substrings in a string with another
  substring
  - Use `str.replace(/\+/g, " ")` to replace all `+` symbols in the string
    with a space
- [`Array.map`] - to convert each element in the array to a new element
- [`Array.reduce`] - to convert an array into an object (TRICKY to use so don't
  use this unless you have a good idea of how to do this)
- [`decodeURIComponent(str)`] - decodes a given string from [Percent Encoding]

## Server requests

After you are finished passing all the specs for the __parse-body.js__ file,
it's time to use the `parseBody(str)` function that you implemented in the
server.

In the __server.js__ file, assemble the request body string. Once the server
is finished assembling the request body string, convert the string into an
object. Then, set the `body` property on the request object, `req.body`, to the
parsed request body.

To test your code to make sure it's working, call the `sendFormPage(req, res)`
function imported at the top of the file so that the function will be invoked by
the server **after request body is fully assembled AND right after you finish
parsing the request body. It should be invoked even if there is no body in the
request.** Your code should look something like this:

```js
// server.js
const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

const server = http.createServer((req, res) => {
  // your code for assembling the request body string...
  req.on("end", () => {
    // your code for parsing the request body string into an object...

    sendFormPage(req, res); // needs to be called even if the request doesn't have a body
  });
});

// ...
```

Run the test specs in the __test/phase-3-server-spec.js__ to make sure you
implemented the server as expected.

```shell
npm test test/phase-3-server-spec.js
```

Finally, to see your application working on the browser, start the server and
navigate to [http://localhost:5000] in your browser to see the HTML form page.
Submit the form to make a request to the server. You should see this in your
browser once you submit:

![parse-request-body-practice-result]

[`string.split`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[`string.replace`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[`array.map`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[`array.reduce`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[`decodeuricomponent(str)`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
[percent encoding]: https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding
[http://localhost:5000]: http://localhost:5000
[parse-request-body-practice-result]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-08/practice-parse-request-body/parsed-request-body-result.png