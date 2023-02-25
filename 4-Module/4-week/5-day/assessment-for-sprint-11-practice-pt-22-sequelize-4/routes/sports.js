const express = require('express');
const router = express.Router();
const {Sport} = require('../db/models')

router.get("/", async (req, res) =>{
    let sports = await Sport.findAll({
        order: [['name', 'DESC']]
    })
    // console.log("SPORTS", sports)
    res.json(sports)
} )

module.exports = router;
