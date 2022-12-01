# Practice: Handling "Resource Not Found" errors

A common feature for applications to implement is to present a friendly
"Resource Not Found" message to end users when a request can't be matched to one
of the API application's defined routes. In this practice, you will implement
this feature using a combination of a middleware function and an error handler
function.

## Set up

`cd` into the __server__ folder.

`npm install` the dependencies.

Run `npm run dev` to start the server with `nodemon` on `localhost` port `5000`.

## "Resource Not Found" middleware

Express has a default error that gets sent to the client when no response is
sent after all middleware are executed. To see this generic response, browser to
[http://localhost:5000/some-unknown-resource] (or any path that doesn't match
one of your application's configured routes). You should see a message in the
browser of `Cannot GET /some-unknown-resource`.

You want to create a "Resource Not Found" middleware that should create an error
when none of the route handlers are matched to a request method/URL path
combination. This middleware should **override that default Express response**
by throwing an error if a request doesn't match any of the route handlers.

Add a middleware function after all the route handlers in the Express
application in the __server/app.js__ file.

In this function, create a `new Error` with the message of "Sorry, the requested
resource couldn't be found".

The status code of a response should be `404` when something is not found in the
server. Any error-handling middleware that . Add a `statusCode` property of
`404` to the error object so that any error-handling middleware that catches
this error knows that the error was thrown because something was not found.

Finally, pass the error into the next error-handling middleware.

Place this middleware function after all of your route handler. By doing so,
this middleware function will only be invoked if a request fails to match any of
your routes.

<details>
  <summary>Why does the placement of this middleware matter?</summary>
  In Express, the order of the middleware defined on the Express application
  matters. Express will attempt to match the request method/URL to the first
  middleware defined then the next until a response is sent or there are no
  more defined middleware to match.
</details>

At this point, you can test your "Resource Not Found" middleware function by
browsing to [http://localhost:5000/some-unknown-resource] (or really any path
that doesn't match one of your application's configured routes).

You should see the error message of "Error: Sorry, the requested resource
couldn't be found" followed by a stack trace of the error message in the
response instead of the default Express response of
`Cannot GET /some-unknown-resource`.

<details>
  <summary>Why does a response get sent back when you didn't explicitly send a
  response?</summary>
  If no response is sent after an error gets thrown from a middleware, then
  Express will send a default response of the error message plus the error stack
  trace for the error that was thrown.
</details>

## Catch-all errors middleware (error-handling middleware)

The error message that you see in the response sent to the client is Express'
**automatically generated error response**. To override this automated response,
you can create an error-handling middleware that will send a different response
when there is an error caught by this middleware.

Create a catch-all errors middleware that sends a custom response for any
request that throws an error in your application. Define an error handling
middleware and connect it to the Express application after all route handlers
and middleware.

<details>
  <summary>Why should you place the "Catch-all" middleware AFTER the "Resource
  Not Found" middleware?</summary>
  The "Resource Not Found" middleware throws an error that the "Catch-all"
  middleware should catch and send a custom response for.
</details>

In the middleware, log the error to the server console.

Then, extract the `statusCode` property on the error and set it as the status
code for the response. If there is no `statusCode` property on the error caught
by the error-handling middleware, then set the status code of the response to a
default of `500`.

Set the body of the response to a JSON containing a property
of `message` with the error message as its value. Set another property of
`statusCode` with the status code of the response as its value.

Make sure the middleware is connected as the very last middleware in your
Express application so that it can catch any errors thrown in any of the route
handlers or middleware before it.

Test your catch-all middleware function by browsing to
[http://localhost:5000/some-unknown-resource] (or really any path that doesn't
match one of your application's configured routes). Check the status code of the
response and make sure that it is `404`. Check the body of the response. It
should be something like:

```json
{
  "message": "Sorry, the requested resource couldn't be found.",
  "statusCode": 404
}
```

## Testing all the other route handlers

Make sure the `GET /` endpoint still works properly. It should still display
"GET / This is the root URL" as the response body.

Awesome! You just implemented a commonly implemented Express middleware for
throwing an error when the request doesn't match any routes in your Express
application.

You also implemented an error-handling middleware that catches all errors thrown
in your Express application and sends a customized response for the error.

You can use these middleware or customize them further in your future Express
applications.

[http://localhost:5000/some-unknown-resource]: http://localhost:5000/some-unknown-resource