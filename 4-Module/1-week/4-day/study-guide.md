## What and Why Express
- Use cases for Express:
  - Allow us to use JavaScript to write our server
  - Reduces amount of boilerplate code
  - Unopinionated

## Intro To Express
- the `express` module 

- Know how to invoke the `express` module to initialize express app

## [Express Route Handlers](https://expressjs.com/en/api.html#app.get.method) (get, post, put, delete, etc.)
- Order is important, what happens if `/:page` is in front of `/page` in routing

## HTTP Server vs. Express
- Understand differences between how HTTP server parses the body and how Express uses middleware to parse body

- How to convert parts of an HTTP server into Express Server (i.e. parsing body like json and route handlers) 

## ReqUEST and ResPONSE Object
- [Response Docs Express](http://expressjs.com/en/4x/api.html#res)
- [Request Docs Express](http://expressjs.com/en/4x/api.html#req)

- Understand how to work with the `req` object to get request information
  - `req.params`, `req.body`, etc.
- Understand how to use the `res` object to send back information to a client
  - `res.status`, `res.send`, `res.json`, etc.


## [Express Middlewares](https://expressjs.com/en/guide/using-middleware.html)
- Know that `middlewares` are just `functions` that can take in `req`, `res`, and, `next`. They are also part of the request/response cycle.
  - Application level middleware through `app.use`
  - as an argument in a `route handler` like `.get`, etc.
    - note that `middlewares` can also be placed in `array` and the array can be passed as an argument

## Middleware Flow Diagram
  - Predicting the order of Express middlewares and which one will be executed in the request and response cycle.

## [Error Handling Middlewares](https://expressjs.com/en/guide/error-handling.html)
- Understand how to differentiate a `regular middleware` vs. an `error-handling middleware` (how many args does each have?)
- Understand `when an error handler middlewares are executed` 
  - what happens if the previous function called `next() vs. next(err)`, which one will trigger which middleware?

## [Express Routers](https://expressjs.com/en/guide/routing.html)
- Understand that `routers` are just `mini-app` 
- How to `refactor the route handlers` to be in `routers` with their respective resource to keep code `DRY`
- Understand how to mount a router (attaching it to Express app)

## [Serving Static Files](https://expressjs.com/en/starter/static-files.html)

## Focus Points
- Practice Assessment 
- Formative Quizzes
- Projects
