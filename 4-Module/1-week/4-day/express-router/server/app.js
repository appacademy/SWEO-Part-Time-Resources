const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
const colorRouter = require('./routes/colors')


app.use('/people', peopleRouter);
app.use('/colors', colorRouter)


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));