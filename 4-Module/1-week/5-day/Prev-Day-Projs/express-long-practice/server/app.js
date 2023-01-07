const express = require('express');
const app = express();
//!!START SILENT

// Phase 1
app.use('/static', express.static('assets'));
app.use(express.json());
// should be line 1, but works fine here
require('express-async-errors');

// Phase 2
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  res.on('finish', () => {
    console.group();
    console.log(`Status Code - ${res.statusCode}`);
    console.groupEnd();
  });
  next();
};
app.use(logger);
//!!END

// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!")
});

//!!START SILENT
// Phase 3
// connect dogs router to the Express application
app.use('/dogs', require('./routes/dogs'));

// Phase 2
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.statusCode = 404;
  throw err;
});

// Phase 4
// Because there are 4 arguments Express knows error-handling middleware
app.use((err, req, res, next) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const response = {
    statusCode: err.status || 500,
    message: err.message || 'Something went wrong',
    stack: isProduction ? undefined : err.stack
  };
  console.error(err);
  res.status(response.statusCode);
  res.json(response);
});

//!!END
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
