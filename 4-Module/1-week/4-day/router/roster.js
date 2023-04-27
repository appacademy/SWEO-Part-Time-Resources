const express = require('express');

const router = express.Router();

router.get('/roster', (req, res) => {
    res.send("You've hit the roster")
})

module.exports = router;