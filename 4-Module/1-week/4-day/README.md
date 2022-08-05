# Error Handling Middleware

Express handles errors through middleware. There are default Development and Production environment errors

```js
app.use((req, res, next) => {
  throw Error();
});

// Development Environment - node app.js
Error
  at ... (Crazy Stack Trace)

// Production Environment - NODE_ENV=production node app.js
"Internal Server Error"
```

This functionality exists to give the developer a detailed error output so the problem can easily be debugged, and to ensure that a user doesn't see any unnecessary information when something goes wrong.

Although the default may work well, it's very useful to set our own error handlers.

## How to use error handling middleware

Error handling middleware _MUST_ have 4 parameters, `err`, `res`, `req`, and `next`, and `err` _NEEDS_ to be the first parameter. This is the only way for Express to recognize something as error handling middleware.

Just like with any other custom middleware, we pass our error handlers into `app.use()` so it can be ran on every request. Error handler should be defined after all other middleware and route handlers.

```js
app.use(express.json())
app.use(myMiddleware)

app.get(...)

app.get(...)

app.post(...)

app.delete(...)

app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.status || 500)
  res.send('Whoops! Some error happened I guess?')
})
```

## What a/A DOESN'T want you to know!?! 😳 😱 🤫

There is a very important difference between an **_error being thrown_** and an **_error being handled_**

Notice that simply hitting a route that doesn't exist **_does not_** throw an error, instead "Cannot get /urlPath" is sent to the browser. Adding in an error handler does not change that functionality

```js
app.get('/hi', (req, res) => {
  res.send('Hi there!');
});

// This is an error handler
app.use((err, req, res, next) => {
  res.send('Error: Never got to say hi :( ');
});
```

Making a GET to `/hello`

```md
Cannot GET /hello
```

One more time: **Having An Error Handler Does Not Throw An Error**

If we want our error handler to actually handle something, we have to manually throw an error (provided you don't have broken code). To throw an error, we create a regular middleware function and pass it to `app.use()` at the bottom of our other middleware, but before our error handling middleware.

```js
app.get('/hi', (req, res) => {
  res.send('Hi there!');
});

// This is throwing the error (notice no 'err' parameter)
app.use((req, res, next) => {
  throw new Error("We didn't find that resource");
});

// This is an error handler
app.use((err, req, res, next) => {
  console.log(err.message);
  res.send('Error: Never got to say hi :( ');
});
```

It is very important you don't pass 'err' to your error thrower! Express will never see that handler if you do.

Express reads the file from top to bottom and applies this middleware checklist:

1. Run any middleware that should run every time (e.g. `express.json()`)
2. Run any route handlers that match the request
3. If .send/.json is called, send the response. If next is called, run the next standard middleware
4. If an error is thrown or next is called with an error passed in, run the next error middleware
5. Restart from step 3 until a response is sent

The key here is standard vs error middleware. Express will only ever use standard middleware until an error is thrown. From there, error middleware is used as long as next is called with an error - `next(err)`. If next is called normally, the next standard middleware is called, including route handlers.

---

## Express Router

Express Routers allow us to direct traffic into different parts of our application. This enables us to have a more organized file structure, making it much easier to develop and maintain. Instead of all requests being handled in app.js, we can handle user requests in user.js, dog requests in dog.js, and so on.

Express Router is available through Express, no extra install required. We must remember to export our router and the bottom of the file so we can import it into app.js

```js
// a file that is not app.js
const express = require('express');

const router = express.Router();

/* Routing code goes here */

module.exports = router;
```

Routers are commonly stored in a "routes" folder. Within that folder you create a file to handle your routes. To create a route, do as we normally would with app.methodName(), but use router instead.

```js
// routes/eldenRing.js

// url: localhost:5000/eldenRing
router.get('/', (req, res) => {});

// url: localhost:5000/eldenRing/Greatsword
router.post('/:weapon', (req, res) => {});
```

Finally, in app.js, we import our routers and `app.use()` them. The syntax is similar to `express.static()`, the first argument is the url path the user should type into the browser, the second is the router we've created.

```js
// app.js
const express = require('express');

const eldenRing = require('./routes/eldenRing');

const app = express();

app.use('/eldenRing', eldenRing);
```

Just like with `express.static()`, the url path Does Not have to match the file we're routing from. It's simply the convention and tends to be easier to work with.

```js
// same app.js

app.use('/bestGameEver', eldenRing);
```
