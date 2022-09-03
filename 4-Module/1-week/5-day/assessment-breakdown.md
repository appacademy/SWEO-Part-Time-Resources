# Assessment Week 19 Breakdown
- Topics: Express, routing (route handlers), express routers, middlewares, errorhandling, serving static files

- Breakdown:
  - time: 1hr
  - 17 MC x 1pt = 17pts 
  - Passing Score: 13 / 17

## Tips
- If you feel that there are `2+ answers`, `read each one carefully`, don't jump the gun
- Take your time, double check, Don't jump to conclusion, go through everything

## Server Review + Postman Testing API
- [Server Review / testing w/ Postman](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-19---express/server-review)

## What and Why Express
- [what/why is express](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-19---express/what-is-express-)
- Use cases for express:
  - Allow us to use javascript to write our server
  - Reduces amount of boilerplate code
  - unopinion
## Intro To Express
- [Intro to Express](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-19---express/intro-to-express)

- the `express` module 

- Know how to invoke the `express` module to initialize express app. 


## Express Route Handlers (get, post, put, delete, etc.)
- [Express Route Handlers](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-19---express/express-route-handlers)

- Order is important, what happens if `/:page` is in front of `/page` in routing. 

## HTTP Server vs. Express
- [HTTP Server vs. Express](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-19---express/http-server-vs--express-server)

- Understand differences between how HTTP server parses the body and how express uses middlware to parse body

- How to convert parts of an HTTP server into Express Server (i.e. parsing body like json and route handlers) 

## ReQUEST and ReSPONSE Object
- [Request and Response Objects Reading](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-19---express/express-request-response-objects)
- [Response Docs Express](http://expressjs.com/en/4x/api.html#res)
- [Request Docs Express](http://expressjs.com/en/4x/api.html#req)

- Understand how to work with the `Request` Object to get request information like 
  - `req.params`, `req.body`, etc.
- Understand how to use the `Response` Object to send back information to a client.
  - `res.status`, `res.send`, `res.json`, etc.


## Express Middlewares
[Express Middleware](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-19---express/express-middleware)
- Know that `middlewares` are just `functions` that can take it `req`, `res`, and, `next`. They are also part of the request/response cycle. (error handling middlewares can take in an extra arg)
- Middleware can be attached using these ways:
  - Application level middleware through `use.app`
  - as an argument in a `route handler` like `.get`, etc.
    - note that `middlewares` can also be placed in `array` and the array can be passed as an argument

[Middleware Flow Diagram](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-19---express/express-middleware-flow-diagram)
  - Predicting the order of express middlewares and which one will be executed in the request and response cycle.

## Error Handling Middlewares
- [Error handling Middleware](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-19---express/error-handling-middleware)
- Understand how to differentiate a `regular middleware` vs. an `error-handling middleware` (how many args does each have?)
- Understand `when an error handler middlewares are executed` 
  - what happens if the previous function called `next() vs. next(err)`, which one will trigger which middelware?

## Express ROUTERS
[Practice: Express Router](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-19---express/practice--express-router)
- Understand that `routers` are just `mini-app` 
- How to `refactor the route handlers` to be in `routers` to with their respective resource to keep code `DRY`
- Understand how to mount a router (attaching it to express app)

## Serving Static Files
[Serving static files](https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-19---express/serving-static-files-in-express)

## Focus Points
- Practice Assessment 
- Formative Quizzes
- Practices and `code-it-outs`
- Projects