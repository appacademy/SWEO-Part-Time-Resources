const express = require('express');
const router = express.Router();
const { Team, Player, Sport } = require('../db/models');

router.get('/:id', async (req, res) =>{
    let theId = req.params.id
    // console.log("IN ROUTE ID", theId)
    let team = await Team.findByPk(theId, {
        include: [
            {
                model: Sport
            },
            {
                model: Player, as: 'TeamRoster'
            },
        ]
    })
    // console.log("TEAM", team.toJSON())
    res.json(team)
})

router.post('/:id/players', async (req, res) => {
    const teamId = req.params.id;
    let finalId = Number(teamId)
    // let team = await Team.findByPk(teamId)
    // console.log("TEAM", team)

    let { firstName, lastName, number, isRetired} = req.body
    // console.log("REQ BODY", firstName, lastName, number, isRetired)
    let newPlayer = await Player.create({
        firstName,
        lastName,
        number,
        isRetired,
        currentTeamId: finalId
    })
    // console.log("NEW PLAYER", newPlayer)
    res.json(newPlayer)
  })

module.exports = router;
