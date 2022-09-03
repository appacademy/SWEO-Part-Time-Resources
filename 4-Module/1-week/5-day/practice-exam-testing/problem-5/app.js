const express = require("express");
const app = express();
const port = 5000;

// route handlers below are listed in order
// 1:
app.post('/world', (req, res) => { 
    res.send("problem-5 /world")
 });

// 2:
app.post('/:word', (req, res) => { 
    res.send("problem-5 /:word")
 });

// 3:
app.post('/hello', (req, res) => { 
    res.send("problem-5 /hello")
 });

// 4:
app.post('/:word', (req, res) => { 
    res.send("problem-5 /hello")
 });


app.listen(port, () => {
    console.log("listening on port:", port);
})