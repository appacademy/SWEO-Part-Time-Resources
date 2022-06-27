const express = require('express');
const router = express.Router();
const {Team, Player, Sport} = require('../db/models')


router.get('/', async(req, res) => {
    const teams = await Team.findAll({
        order : [
            ['homeCity'],
            ['name', 'DESC']
        ]
    })
    res.json(teams)
})

router.get('/:id', async(req, res) => {
    const team = await Team.findByPk(req.params.id, {
        include : [
            {model : Player},
            {model : Sport}
        ]
    })
    res.json(team)
})

module.exports = router;