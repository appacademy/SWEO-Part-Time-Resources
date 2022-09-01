// if we are exporting this router to its own module, we need to also import express
const express = require("express");


const router = express.Router();

router.get('/', (req, res) => {
    res.send(`did we ever hit sub-posts?`)
});



module.exports = router;