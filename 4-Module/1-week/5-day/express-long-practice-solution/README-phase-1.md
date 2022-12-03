# Basic Phase 1: Boilerplate Express Middleware

In this phase, you will be familiarizing yourself with some boilerplate Express
middleware and how to use them in an Express application.

## Express.static

[Express.static] is a middleware that allows you to easily serve static files
from your Express server.

Serve all the files in the `assets` folder under the `static` resource.

*Question:* Can you guess what the URL path for the `assets/images/dog1.jpg`
file will be?

<details><summary><i>Answer:</i></summary>The server should send the
<code>assets/images/dog1.jpg</code> file to the URL path of
<a href="http://localhost:5000/static/images/dog1.jpg">
http://localhost:5000/static/images/dog1.jpg</a>.</details>

## Express.json

[Express.json] is a middleware that allows you to easily parse the incoming body
of the request as JSON. It deserializes the JSON into a JavaScript object for
you when connected.

Take a look at the [Express.json] documentation. Can you figure out how to
connect it to the Express application?

Use the `POST /test-json` endpoint (code provided to you) to test to see if you
successfully connected the middleware to your application by sending a JSON body
with the request. The response for the `POST /test-json` endpoint should echo
the JSON request body. **Do not use the browser to make `POST` requests until
Phase 3. Use Postman instead.**

## `express-async-errors`

The `express-async-errors` is not a middleware, but is useful for making
sure that asynchronous middleware or route handlers will handle errors
properly.

**RESEARCH TASK**: Use `express-async-errors` in your server file.
Refer to the [express-async-errors npm docs] to see how to add it to your
server files.

Use the `GET /test-error` endpoint (code provided to you) to test to see if you
successfully used it. The response for the `GET /test-error` endpoint should be
an error message formulated by Express with the error message of
`"Error: Hello World!"`.

[http://localhost:5000/static/images/dog1.jpg]: http://localhost:5000/static/images/dog1.jpg
[Express.static]: https://expressjs.com/en/api.html#express.static
[Express.json]: https://expressjs.com/en/api.html#express.json
[express-async-errors npm docs]: https://www.npmjs.com/package/express-async-errors