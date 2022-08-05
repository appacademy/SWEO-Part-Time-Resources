const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.use((req, res, next) => {
  const myError = new Error('Sorry, the requested Resource Not Found');
  myError.statusCode = 404;
  next(myError);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500);
  res.json({ message: err.message, statusCode: res.statusCode });
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
