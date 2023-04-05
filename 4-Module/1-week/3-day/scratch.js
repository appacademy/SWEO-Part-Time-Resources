const express = require('express');
const home = require('./routes/home.js');
const roster = require('./routes/roster.js');
const schedule = require('./routes/schedule.js');

const app = express();

app.use('/', express.static('static'));
app.use('/home', home);
app.use('/roster', roster);
app.use('/schedule', schedule);

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));