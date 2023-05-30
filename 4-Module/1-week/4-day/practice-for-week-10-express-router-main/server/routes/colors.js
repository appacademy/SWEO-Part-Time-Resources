const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.json('GET /colors')
})

router.get('/:name', (req, res) => {
    res.json(`GET /colors/${req.params.name}`)
})

module.exports = router
