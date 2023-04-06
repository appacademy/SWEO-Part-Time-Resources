const express = require('express');
const homeRouter = require('./home.js');
const rosterRouter = require('./roster.js');
// require('dotenv').config();

const app = express();

app.use('/', express.static('static'));

app.use('/home', homeRouter);
app.use('/roster', rosterRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));