const express = require('express');

const app = express();

app.use(express.json());

const logTime = (req, res, next) => {
    console.log("Current time: " + new Date().toISOString());
   
    next();
}

app.use(logTime)

const logHi = (req, res, next) => {
    console.log("Hello!");

    next()
}

app.get('/', logHi, (req, res) => {
    res.send("hello")

})

app.get('/users', (req, res) => {
    res.send("Endpoint 2")
})

//Custom error handling

app.use((err, req, res, next) => {
    console.error(err);
    res.send("Error bro")
})


const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));