# Practice: fetch

In this exercise, you will practice extracting the response components from
`GET` requests made with `fetch` on the browser.

## Set up

The server you will be making requests to is the same [server] from the
HTTP Basics practice seen a few days prior.

`cd` into the `server` folder and run `npm install`.

Start the server by running `npm start`.

This will start the server at [http://localhost:5000].

The documentation of this server is given in the solution of the HTTP Basics
long practice assigned a few days prior.

Clone the practice from the [starter].

Make fetch requests in the browser for each of the tasks in the
__fetch-requests.js__ file. Paste your code for the fetch requests in the file
once you finish each task.

## Extract the response components and print them

Make a `GET` request to the `/products` route using Postman. Take note of the
necessary request components and the components of the response returned from
the server.

Use the "Console" tab in the browser to make the equivalent `fetch` request.

Print the status code, the `Content-Type` header, and the body of the response
as text in the console.

To extract these response components, use the following documented properties
and methods on the `Response` object that the `fetch` function resolves to:
[MDN Documentation on the `fetch` Response object].

Here are some useful properties and methods on the `Response` object:

- `.status` - status code of the response
- `.ok` - returns `true` if the response was successful and `false` otherwise
- `.headers.get(headerName)` - returns the value of the header with the given
  `headerName`
- `.text()` - returns a `Promise` that resolves to the body of the response

## Additional practice

Make `GET` requests to other routes in this server to practice formulating
`fetch` requests. The documentation of this server is given in the solution of
the HTTP Basics project assigned a few days prior.

[server]: https://github.com/appacademy/practice-for-week-08-http-basics-long-practice
[starter]: https://github.com/appacademy/practice-for-week-08-fetch
[http://localhost:5000]: http://localhost:5000
[MDN Documentation on the `fetch` Response object]: https://developer.mozilla.org/en-US/docs/Web/API/Response