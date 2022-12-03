const express = require('express');
const app = express();
const dogRouter = require('./routes/dogs')
const foodRouter = require('./routes/dog-foods')

app.use('/static', express.static('assets'))
app.use(express.json())
require('express-async-errors')

app.use((req, res, next) => {
  console.log(req.method, req.url )
  // console.log(res.statusCode)
  next()
})

app.use('/dogs', dogRouter)

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


app.use((req, res, next) => {
  const err = new Error('The requested resource couldn\'t be found')
  err.statusCode = 404
  next(err)
})

app.use((err, req, res, next) => {
  const isProduction = process.env.NODE_ENV
  const statusCode = err.statusCode
  const response = {
    statusCode: statusCode || 500,
    message: err.message || 'Something went wrong',
    stack: isProduction ? err.stack : undefined
  }
  res.status(statusCode).json(response) 
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));