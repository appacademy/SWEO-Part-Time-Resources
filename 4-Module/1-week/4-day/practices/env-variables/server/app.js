const express = require('express');
const app = express();

// 1) require the dotenv module 
const dotenv = require("dotenv");
console.log("dotenv module:", dotenv); //{ config: [Function: config], parse: [Function: parse] }
dotenv.config(); //this will take the variables in the .env and put it into our environment variable for this application

app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));