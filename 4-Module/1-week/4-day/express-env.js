//.env
PORT=5000
SECRET_MESSAGE="Hello from .env"

//app.js
const express = require('express');
const app = express();

// a possible solution using dotenv
require('dotenv').config();

app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));
