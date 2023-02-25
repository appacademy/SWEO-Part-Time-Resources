const express = require('express');
const router = express.Router();

const {Fan, Player} = require('../db/models')

router.get('/:fanId/drafts', async (req, res) => {
    // console.log(req.params.fanId)
    let theId = req.params.fanId
const fan = await Fan.findByPk(theId, {
    include: [
        {model: Player}
    ]
})
// console.log("FAN", fan.toJSON())
    res.json(fan.Players)
})

router.delete("/:id", async (req, res) =>{
    let theId = req.params.id

    let fan = await Fan.findByPk(theId)
    // console.log(fan.toJSON())
    await fan.destroy()
    //ress.json at some point
    res.json({message: 'Successfully deleted'})
})

module.exports = router;
