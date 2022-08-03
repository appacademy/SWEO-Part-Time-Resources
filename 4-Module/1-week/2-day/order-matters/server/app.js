const express = require('express');
const app = express();

//! 5
app.get('/goodbye/until/forever', (req, res) => {
  res.send('So long. Farewell. Have a great life!');
});

//! 4
app.get('/goodbye/until/:time', (req, res) => {
  res.send(`Goodbye. See you ${req.params.time}.`);
});

//! 3
app.get(['/goodbye', '/goodbye/*'], (req, res) => {
  res.send('Goodbye, my friend!');
});

//! 2
app.get('/hello', (req, res) => {
  res.send('Hello, my friend!');
});

//! 1
app.get('/', (req, res) => {
  res.send('Server is alive');
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
