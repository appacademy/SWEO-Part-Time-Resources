const express = require('express');
const app = express();
// Your code here
// 1) npm install dotenv
// 2) require the module
const dotenv = require("dotenv");
// console.log(dotenv); { config: [Function: config], parse: [Function: parse] }
// 3) invoke the dotenv.config() function
dotenv.config(); //this will populate our environment variables from the .env file!!

app.get('/', (req, res) => {
    // res.send(process.env.SECRET_MESSAGE);
    res.send(process.env.PASSWORD);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));