# Phase 2: Error Handling

The next step is to set up your server error handlers.

Connect the following error handling middlewares after your route connections in
`app.js` (i.e., after `app.use(routes)`). Here is a refresher on how to create
an [Express error-handling middleware].

## Resource Not Found Error-Handler

The first error handler is actually just a regular middleware. It will catch
any requests that don't match any of the routes defined and create a server
error with a status code of `404`.

```js
// backend/app.js
// ...
// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = { message: "The requested resource couldn't be found." };
  err.status = 404;
  next(err);
});
```

If this resource-not-found middleware is called, an error will be created with
the message `"The requested resource couldn't be found."` and a status code of
`404`. Afterwards, `next` will be invoked with the error. Remember, `next`
invoked with nothing means that error handlers defined **after** this middleware
**will not** be invoked. However, `next` invoked with an error means that error
handlers defined **after** this middleware **will** be invoked.

## Sequelize Error-Handler

The second error handler is for catching Sequelize errors and formatting them
before sending the error response.

```js
// backend/app.js
// ...
const { ValidationError } = require('sequelize');

// ...

// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    let errors = {};
    for (let error of err.errors) {
      errors[error.path] = error.message;
    }
    err.title = 'Validation error';
    err.errors = errors;
  }
  next(err);
});
```

If the error that caused this error-handler to be called is an instance of
`ValidationError` from the `sequelize` package, then the error was created from
a Sequelize database validation error and the additional keys of `title` string
and an object representation of its `errors` array and passed into the next
error handling middleware.

## Error Formatter Error-Handler

The last error handler is for formatting all the errors before returning a JSON
response. It will include the error message, the error messages as a JSON object
with key-value pairs, and the error stack trace (if the environment is in
development) with the status code of the error message.

```js
// backend/app.js
// ...
// Error formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack
  });
});
```

This should be the last middleware in the `app.js` file of your Express
application.

## Testing the Error Handlers

You can't really test the Sequelize error handler now because you have no
Sequelize models to test it with, but you can test the _Resource Not Found_
error handler and the Error Formatter error handler.

To do this, try to access a route that hasn't been defined in your `routes`
folder yet, like [http://localhost:8000/not-found].

If you see the json below, you have successfully set up your _Resource Not
Found_ and Error Formatter error handlers!

```json
{
  "title": "Resource Not Found",
  "message": "The requested resource couldn't be found.",
  "errors": {
    "message": "The requested resource couldn't be found."
  },
  "stack": "Error: The requested resource couldn't be found.\n ...<stack trace>..."
}
```

If you don't see the json above, check your backend server logs in your
terminal where you ran `npm start`.

Make sure your route at [http://localhost:8000/api/csrf/restore] is
still working. If it is not working, make sure you are defining your error
handlers **after** your route connections in `app.js` (i.e., after
`app.use(routes)`).

You will test the Sequelize error handler later when you populate the
database with a table.

## Commit your code

Now is a good time to commit and push your code to GitHub!

Here's a recommendation for what to write as your commit message:
"Add error-handling middleware for common errors and debugging"

[helmet on the `npm` registry]: https://www.npmjs.com/package/helmet
[Express error-handling middleware]: https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling
[model-level validations]: https://sequelize.org/master/manual/validations-and-constraints.html
[model scoping]: https://sequelize.org/master/manual/scopes.html
[Content Security Policy]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
[Cross-Site Scripting]: https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting
[crossOriginResourcePolicy]: https://www.npmjs.com/package/helmet
[http://localhost:8000/hello/world]: http://localhost:8000/hello/world
[http://localhost:8000/not-found]: http://localhost:8000/not-found
[http://localhost:8000/api/set-token-cookie]: http://localhost:8000/api/set-token-cookie
[http://localhost:8000/api/restore-user]: http://localhost:8000/api/restore-user
[http://localhost:8000/api/require-auth]: http://localhost:8000/api/require-auth
[http://localhost:8000/api/session]: http://localhost:8000/api/session
[http://localhost:8000/api/csrf/restore]: http://localhost:8000/api/csrf/restore
