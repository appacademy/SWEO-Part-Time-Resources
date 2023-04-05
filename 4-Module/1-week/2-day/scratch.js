const express = require('express');
const app = express();

const logTime = (req, res, next) => {
  console.log('Current Time: ', new Date().toString());
  next();
}
const printMessage = (req, res, next) => {
  console.log('This is the message');
  next();
}

app.use( logTime );
let mwArr = [printMessage];

app.get('/goodbye/until/tomorrow', mwArr, (req, res) => {
  res.send('See you tomorrow');
});
app.get('/goodbye/*', (req, res) => {
  res.send('Goodbye, my friend!');
});
app.get('/throw-error', (req, res) => {
  throw new Error('This is a Demo Error');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 404);
  res.send(err.message);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});