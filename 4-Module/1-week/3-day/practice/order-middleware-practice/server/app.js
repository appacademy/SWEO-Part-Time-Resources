const express = require('express');
const app = express();

// First
app.use('/', (req, res, next) => {
  console.log('First');
  const error = new Error('First');
  next(error); //next(error) when we pass error --> find a suitable handler that meets the requirements to handle an error
});

// Second
app.use((req, res, next) => {
  console.log('Second');
  next();
});

// Third
app.get('/other-resource', (req, res, next) => {
  console.log('Third');
  next();
}, (req, res, next) => {
  res.send('Message');
});

// Fourth
const fourth = (req, res, next) => {
  // this throws an error, BUT IS NOT AN ERROR HANDLER MIDDLEWARE
  console.log('Fourth');
  const error = new Error('Fourth');
  throw error;
};

// Fifth
// to be an error handler middleware, the middleware must take in 4 PARAMS, not 3 PARAMS.
const fifth = (err, req, res, next) => {
  console.log('Fifth');
  next(); //not throwing an error, only invoking a regular next()
};

// [fourth, fifth] ==> either hit fourth, or fifth or BOTH or NONE, if conditions are met.
app.use('/', [fourth, fifth]);

// Sixth
app.get('/other-resource', (req, res, next) => {
  console.log('Sixth');
  next();
});

// Seventh
app.use((req, res, next) => {
  console.log('Seventh');
  res.send('Message');
});

// Eighth
app.use((err, req, res, next) => {
  console.log('Eighth');
  res.send('Message');
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));