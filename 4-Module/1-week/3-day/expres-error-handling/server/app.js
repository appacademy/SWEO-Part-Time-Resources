const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});




app.use((req, res, next) => {
  const err = new Error('Sorry, the requested resource couldn\'t be found.')
  err.statusCode = 404
  next(err)
})

app.use((err, req, res, next) => {
  console.log(err)
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || 'Something went wrong',
    statusCode
  })
})


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));