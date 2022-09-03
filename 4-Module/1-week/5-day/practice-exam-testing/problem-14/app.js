const express = require("express"); //Import in the express module

const app = express(); //this is where we INITIALIZE IT our unnaned express app
const port = 5000;

console.log("problem 14");

app.get('/hello/:p', (req, res) => {
    res.send('Hello to you too!');
  });

app.listen(port, () => {
    console.log("listening on port:", port);
})