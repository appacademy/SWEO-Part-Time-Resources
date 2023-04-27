const express = require('express');

const router = express.Router();

router.get('/home', (req, res) => {
    res.send("You've hit the home page")
})

router.get('/home/profile', (req, res) => {
    //asfsafsafafasf
})

router.get('/home/logout', (req, res) => {
    //asfsafsafafasf
})

module.exports = router;