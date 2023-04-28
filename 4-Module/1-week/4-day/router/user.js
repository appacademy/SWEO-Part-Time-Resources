const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
    res.send("Did it work?")
})

router.post('/', (req, res) => {

})

router.get('/:userId', (req, res) => {

})

module.exports = router;