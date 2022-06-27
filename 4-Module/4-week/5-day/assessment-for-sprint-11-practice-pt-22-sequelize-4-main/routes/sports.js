const express = require('express');
const router = express.Router();

const {Sport, Team} = require('../db/models')

router.get('/', async(req, res) => {
    let sports = await Sport.findAll({
        order : [
            ['name', 'DESC']
        ]
    })
    res.json(sports)
})

router.get('/:name', async (req, res) => {
    let sport = await Sport.findOne({
        where : {
            name : req.params.name
        },
        include : {
            model : Team
        }
    })
    res.json(sport)
})


module.exports = router;