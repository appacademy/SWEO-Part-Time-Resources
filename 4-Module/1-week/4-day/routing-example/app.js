const express = require('express');

const home = require('./routes/home');
const schedule = require('./routes/schedule');
const roster = require('./routes/roster');

const app = express();

app.use('/home', home);
app.use('/schedule', schedule);
app.use('/banana', roster);

app.get('/', (req, res) => {
	res.send("This is the base route")
})

const port = 5000;

app.listen(port, () => console.log("I'm done"), port);
