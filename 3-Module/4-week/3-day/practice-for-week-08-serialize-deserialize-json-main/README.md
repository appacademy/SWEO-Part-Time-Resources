# Practice: Parsing and Returning JSON from a Server

In this practice, you will parse the request body as JSON instead of as
`x-www-form-urlencoded` and return JSON as the body of a request in an `http`
server.

## Set Up

Clone the project from the [starter].

Take a look at the server code in `server.js`. You will see the server parsing
the body (decoded from percent encoding) by assuming that the `Content-Type`
header is `x-www-form-urlencoded`.

## Parsing a JSON Request Body

If the `Content-Type` header is `application/json`, parse the body of the
request as JSON, not percent encoded. To parse the body, deserialize the request
body from a JSON string into a JavaScript object.

Tip: `req.headers['content-type']` returns the `Content-Type` header of the
request.

## Return a JSON Response

Serialize the `resBody` object into JSON and write that to the body of the
response. Make sure to set the necessary response components!

[starter]: https://github.com/appacademy/practice-for-week-08-serialize-deserialize-json