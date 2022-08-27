require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.use('/players', require('./routes/players'));
app.use('/teams', require('./routes/teams'));
app.use('/sports', require('./routes/sports'));
app.use('/fans', require('./routes/fans'));
app.use('/matches', require('./routes/matches'));

if (require.main === module) {
  const port = 8004;
  app.listen(port, () => console.log('Server-4 is listening on port', port));
} else {
  module.exports = app;
}