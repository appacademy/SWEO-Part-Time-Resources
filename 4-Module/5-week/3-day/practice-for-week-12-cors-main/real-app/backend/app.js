const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const { ValidationError } = require("sequelize");
const path = require('path');

const usersRouter = require('./routes/users');
const tweetsRouter = require('./routes/tweets');
const sessionRouter = require('./routes/session');

const { environment } = require("./config");
const isProduction = environment === "production";

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());

/* --------------------------- Enable CORS --------------------------- */

// 1. Very Ambiguous CORS policy (bad)
 app.use(cors({
   origin: '*'
 }));

// 2. Less-Ambiguous CORS policy - allow malicious app (okay, but still not good)
// app.use(cors({
//   origin: /http:\/\/localhost/, // allow any origin beginning with 'http://localhost'
//   credentials: true // allow sending and receiving cookies
// }));

// 3. More Specific CORS policy - does not allow malicious app (good)
// app.use(cors({
//   origin: 'http://localhost:5001',
//   credentials: true // allow sending and receiving cookies
// }));

// 4. Multiple origins CORS policy - allow malicious app (good if you want
  // to allow malicious app)
// app.use(cors({
//   origin: ['http://localhost:5001', 'http://localhost:5002'],
//   credentials: true // allow sending and receiving cookies
// }));

/* ------------------------ Frontend Files -------------------------- */

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../frontend", "home.html"));
});

app.get('/login', (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../frontend", "login.html"));
});

app.get('/profile', (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../frontend", "profile.html"));
});

app.use(express.static(path.resolve('../frontend')));

/* ------------------------- API Endpoints -------------------------- */

app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);
app.use('/api/session', sessionRouter);

// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});

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

const port = 5001;
app.listen(port, () => console.log('Server is listening on port', port));