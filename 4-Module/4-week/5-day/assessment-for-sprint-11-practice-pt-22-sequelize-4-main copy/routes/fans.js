
const express = require('express');
const {Fan} = require('../db/models');
const router = express.Router();


router.get('/:id/drafts', async(req, res) => {
    let fan = await Fan.findByPk(req.params.id)
    let players = await fan.getPlayers()
    res.json(players)
})

router.delete('/:id', async(req, res) => {
    let fan = await Fan.findByPk(req.params.id)
    await fan.destroy()
    res.json({
        "message": "Successfully deleted"
      })
})


//testing comment
module.exports = router;
