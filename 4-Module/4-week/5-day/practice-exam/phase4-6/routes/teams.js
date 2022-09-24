const express = require('express');
const router = express.Router();

const {Team, Player} = require('../db/models');

// /teams/1/players
router.post('/:id/players', async (req,res)=>{
    // we're going to need req object data
    const teamId = Number.parseInt(req.params.id);
    const {firstName, lastName, number, isRetired} = req.body;

    // find the team that we want to add the player to
    const team = await Team.findByPk(teamId);

    // using the team instance, I want to add the player into the database (hint association gives us free functions that we can use to do this)
    if(!team){
        res.status(404);
        return res.json({
            message: "No team found"
        })
    }

    else{
        // -----------method 1-----------
        // returns an instance (object) of the player that we just created
        // // if you alias your model, you'll need to change createPlayer to createWhateverAliasYouGaveModel 
        // const playerAdded = await team.createPlayer({
        //     firstName: firstName,
        //     lastName,
        //     number,
        //     isRetired: isRetired
        // })
        // return res.json(playerAdded)
        // -----------method 2-----------
        const playerAdded = await Player.create({
            firstName: firstName,
            lastName,
            number,
            isRetired: isRetired,
            currentTeamId: teamId
        })
        return res.json(playerAdded)
    }
    


})

module.exports = router;