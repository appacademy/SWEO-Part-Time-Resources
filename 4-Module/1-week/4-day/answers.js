//github
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


//github
//app.js
const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
app.use('/people', peopleRouter);


const colorRouter = require('./routes/colors');
app.use('/colors', colorRouter);


const port = process.env.port || 5000;
app.listen(port, () => console.log('Server is listening on port', port));

//colors.js
const express = require("express")

const router = express.Router()

router.get("/", (req, res) =>{
    // console.log("TEST")
    res.json("GET /colors")
})

router.get("/:name", (req, res) =>{
    // console.log("TEST")
    res.json("GET /colors/:name")
})




module.exports = router

//github
const express = require('express');
const app = express();
//!!START

// Part 1
// app.use(express.static('assets'));

// Part 2
app.use(express.static('assets/scripts'));

// Part 3
app.use('/stylesheets', express.static('assets/css'));

// BONUS
app.use('/stickers', express.static('assets/images'));
//!!END

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

