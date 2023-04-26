//Express middleware

const express = require('express');

const app = express();

//Our first middleware
const logTime = (req, res, next) => {
    console.log("am i first");

    next();
}

const logHi = (req, res, next) => {
    console.log("am i second");

    next();
}

// app.use(logTime);

app.get('/', [logTime, logHi], (req, res) => {
    res.send("heloooo")
})

//Error handling

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500)
    res.send("Error bro")
})


const PORT = 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))