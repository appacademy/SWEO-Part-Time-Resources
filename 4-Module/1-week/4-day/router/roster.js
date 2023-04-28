const express = require('express');

const router = express.Router();

// WE ARE IN /ROSTER

router.get('/', (req, res) => {
    res.send("You've hit the roster")
})

router.post('/', (req, res) => {

})

router.get('/:userId', (req, res) => {

})

module.exports = router;