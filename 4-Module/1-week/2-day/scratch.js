const { error } = require('console');
const express = require('express');
const app = express();

// req, res, next
const logTime = (req, res, next) => {
  console.log('Current Time: ', new Date().toString());
  next()
}

app.use( express.json() )
app.use( logTime );

const passOnMessage = (req, res, next) => {
  console.log('This is the message');
  next();
}

app.get('/goodbye/until/tomorrow', passOnMessage, (req, res) => {
  res.send('See you tomorrow');
});
app.get('/goodbye/*', (req, res) => {
  res.send('Goodbye, my friend!');
});
app.get('/throw-error', (req, res) => {
  throw new Error('Demo Error');
});
// put specific routes before generic routes
// place similar routes together

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.send('An error has occured!');
})

const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});