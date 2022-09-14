const express = require("express");
const router = express.Router();
const {Post} = require('../../db/models')

router.get('/', async(req, res) => {
    res.json(await Post.findAll())
})

router.get('/:id', async (req, res) => {
    res.json(await Post.findByPk(parseInt(req.params.id, 10)))
})

module.exports = router