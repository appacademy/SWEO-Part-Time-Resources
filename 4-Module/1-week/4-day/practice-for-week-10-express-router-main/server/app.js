const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
const colorsRouter = require('./routes/colors')

app.use('/people', peopleRouter);
app.use('/colors', colorsRouter)

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
