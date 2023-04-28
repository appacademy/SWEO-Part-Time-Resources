const express = require('express');

const router = express.Router();

const user = require('./user');

//router.use(user); Just a weird fun test we did


router.get('/home', (req, res) => {
    res.send("You've hit the Home page")
})

router.post('/home', (req, res) => {

})

router.get('/home/:userId', (req, res) => {

})

router.get('/profile/info/:id', (req, res) => {
    res.send("Did it work?")
})

module.exports = router;