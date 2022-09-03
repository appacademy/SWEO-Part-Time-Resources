const express = require("express");
const app = express();
const port = 5000;

// POST localhost:5000/tags
app.post('/tags/', (req, res) => {
    res.send("problem 1: request received successfully to translate http.createServer")
})


app.listen(port, () => {
    console.log("listening on port:", port);
})