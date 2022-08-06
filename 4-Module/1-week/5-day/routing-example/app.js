const express = require('express');

const home = require('./routes/home');
const schedule = require('./routes/schedule');
const roster = require('./routes/roster');

const app = express();

app.use('/home', home);
app.use('/schedule', schedule);
app.use('/roster', roster);

app.get('/', (req, res) => {
  res.send('no router being used here');
});

const port = 5000;

app.listen(port, () => console.log('We routin'));
