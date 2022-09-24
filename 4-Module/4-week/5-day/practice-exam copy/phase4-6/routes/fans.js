const express = require('express');
const router = express.Router();

const {Player, Fan} = require('../db/models')

// /fans/:fanId/drafts
router.get('/:fanId/drafts', async (req,res)=>{
    // we need stuff from the req!!
    const fanId = req.params.fanId;

    const fan = await Fan.findByPk(fanId, {
        include: {
            model: Player,
            // through: {
            //     attributes: []
            // }
        },
    })
    
    return res.json(fan.Players);
})

router.delete('/:id', async (req,res)=>{
    // get the thigns i need from req object
    const id = req.params.id

    //from there use the id to find a fan
    const fan = await Fan.findByPk(id);
    console.log("-------fan", fan);

    //if that fan DOES NOT EXIST, send back a res 404, and the error message
    if(!fan){
        res.status(404);
        return res.json({
            message: "No Fans Found"
        })
    }

    // do not have to use try/catch, this is just for good practice
    try {
        //otherwise, with the fan instance, use the destroy() method to remove this row data from the database

        await fan.destroy();
        return res.json({
            "message": "Successfully deleted"
        })
    } catch (error) {
        return res.json({
            error:error
        })
    }

})

module.exports = router;