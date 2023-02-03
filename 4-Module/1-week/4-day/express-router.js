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
