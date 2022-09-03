const express = require("express"); //Import in the express module

const app = express(); //this is where we INITIALIZE IT our unnaned express app
const port = 5000;

console.log("problem 12");

// middleware below are listed in order

// 1:
app.get('/', (req, res, next) => {
    console.log("middle 1");
    next(err);
});

// 2:
app.use((err, req, res, next) => {
    console.log("middle 2");
    next(err);
});

// 3:
app.use((err, req, res, next) => {
    console.log("middle 3");
    return res.json();
});

// 4:
app.use((req, res, next) => {
    console.log("middle 4");
    next();
});

app.listen(port, () => {
    console.log("listening on port:", port);
})