const express = require("express");
const logger = require("morgan");

const port = 5000;
const app = express();

//app.use(logger("dev"));

// const server = http.createServer((req, res) => {
//   req.on("end", () => {
//     if (req.method === 'POST' && req.url === '/tags/') {
//       // Process request
//     }
//   })
// });
// How does the above code for route handling in an HTTP Server translate to Express?

// app.post('/tags', (req, res) => { /* Process request */ }) ✅

// app.post('/tags/:tagId', (req, res) => { /* Process request */ })

// app.get('/tags', (req, res) => { /* Process request */ })

// -----------------------------------------------------

// What is Postman primarily used for when developing an Express server?

// To test the endpoints of the Express server. ✅

// To define route handlers on the Express server.

// To allow the Express server to listen to requests on the network.

// To open the connection between the network and the Express server.

// ----------------------------------------------------

// app.get("/hello/:p", (req, res) => {
//   res.send("Hello to you too!");
// });

// True or False: The route handler above will be invoked when a request to GET /hello/world is sent to the server.

// True ✅

// False

// -------------------------------------------------------
// const router = express.Router();
// router.get("/hello", (req, res) => {
//   res.send("this one works");
// });

// app.use("/world", router);
// Which of the following requests will be matched with the router.get('hello', ...) route handler?

// GET /hello

// GET /hello/world

// GET /world/hello ✅

// GET /world

// -------------------------------------------------------
// route handlers below are listed in order
// 1:
// app.post("/world", (req, res) => {
//   res.send("1");
// });

// // 2:
// app.post("/:word", (req, res) => {
//   res.send("2");
// });

// // 3:
// app.post("/hello", (req, res) => {
//   res.send("3");
// });

// // 4:
// app.post("/:word", (req, res) => {
//   res.send("4");
// });

// Which route handler will be invoked for a POST /hello request if all the route handlers are defined in order from 1-4?

// 4

// 3

// 2 ✅

// 1

// -----------------------------------------------------------
// True or False: Route parameters in both an HTTP server and an Express server are automatically parsed and matched.

// True

// False ✅

// ------------------------------------------------------------
// True or False: An Express error handling middleware does NOT need 4 arguments in its function definition.

// False ✅

// True

//supporting link
//open.appacademy.io/learn/js-py---pt-aug-2022-online/week-19---express/error-handling-middleware

// -----------------------------------------------------------

//app.use("/hello", express.static("world"));

// Based on the code above, which of the following is correct?

// The Express server will read the files from the hello server folder and serve each file at /hello + the relative path of the file from the hello folder.

// The Express server will read the files from the world server folder and serve each file at /hello + the relative path of the file from the world folder. ✅

// The Express server will read the files from the world server folder and serve each file at /world + the relative path of the file from the world folder.

// The Express server will read the files from the hello server folder and serve each file at /world + the relative path of the file from the hello folder.
// -------------------------------------------------------

//supporting documentation
//https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-19---express/express-middleware

//--------------------------------------------------------

// I want to build a server written in any language.
// I don't care too much about customizing my server.
// I want most of the backend choices like how to
// organize my routes and how to parse the body
// decided for me.
// Based on the scenario above, should you use Express as a framework?

// Yes

// No ✅

// -----------------------------------------------------------
// 1:
// app.get("/", (req, res, next) => {
//   console.log("1");
//   next(err);
// });

// // 2:
// app.use((err, req, res, next) => {
//   console.log("2");
//   next(err);
// });

// // 3:
// app.use((err, req, res, next) => {
//   console.log("3");
//   return res.json();
// });

// // 4:
// app.use((req, res, next) => {
//   console.log("4");
//   next();
// });

// In the code above, assume that all the middleware are defined and connected in order from 1-4. Will middleware 3 be invoked for a request to GET /hello?

// No ✅

// Yes

// ----------------------------------------------------------
// const helloWorld = (req, res, next) => { ... };

// router.use(helloWorld);

// router.get('/hello', (req, res) => { ... });

// app.use('/router', router);
// In what way is the helloWorld middleware is connected?

// to a router ✅

// globally

// to a route handler

// -----------------------------------------------------------
//app.get("/", (req, res) => res.json("Hello World"));

// res.json('Hello World');
// What will the "Content-Type" header of the response be when Express sends the response above?

// application/json ✅

// text/plain

// application/x-www-form-urlencoded

// text/html

//----------------------------------------------------------
// 1:
// const express = require('express');
// const app = express();

// // 2:
// const app = require('express');

// // 3:
// const app = require('express').App;

// // 4:
// const express = require('express');
// In the code above, which set of code initializes the Express application properly?

// 4

// 2

// 1 ✅

// 3

// ------------------------------------------------------

// 1:
// app.use(tweetsRouter);

// // 2:
// app.use('/tweets', (req, res) => { ... });

// // 3:
// app.use('/tweets', tweetsRouter);

// 4:
// app.get('/tweets', (req, res) => { ... });
// app.post('/tweets', (req, res) => { ... });
// app.put('/tweets/:id', (req, res) => { ... });
// Which of the following code sections BEST handles requests for the tweets resource?

// 2

// 1

// 4

// 3 ✅
// -------------------------------------------------------------

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     return next();
//   }
//   next(new Error('This is an error message'));
// });
// What will the middleware above do?

// Return a response of 'This is an error message'.

// Invoke the next error handling middleware with an error for all requests.

// Invoke the next error handling middleware for all GET requests.

// Invoke the next error handling middleware for all non-GET requests. ✅

// ----------------------------------------------------------
const firstRouter = express.Router();

app.use("/testing", firstRouter);
firstRouter.use(logger("dev"));

firstRouter.get("/", (req, res) => {
  res.send("this is binded middleware");
});

const secondRouter = express.Router();

firstRouter.use("/secondRouter", secondRouter);

secondRouter.get("/", (req, res) => {
  res.send("we are using our second router");
});
// below code errors out
// firstRouter.listen(8081, () => console.log("now listening on 8081"));

app.listen(port, () => console.log(`Now listening on port ${port}`));
