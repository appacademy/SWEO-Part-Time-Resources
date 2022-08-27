const express = require("express");
const router = express.Router();
const {Comment} = require('../../db/models')

router.get('/:postId', async (req, res) => {
    res.json(await Comment.findAll({
        where : {
            postId : parseInt(req.params.postId, 10)
        }
    }))
})

module.exports = router