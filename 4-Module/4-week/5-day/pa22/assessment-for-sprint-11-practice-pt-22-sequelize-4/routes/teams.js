const express = require('express');
const router = express.Router();

const { Team, Player, Sport } = require("../db/models");

router.post("/:id/players", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, number, isRetired } = req.body;

  // const team = await Team.findByPk(id);

  const newPlayer = await Player.create({
    firstName,
    lastName,
    number,
    isRetired,
    currentTeamId: parseInt(id)
  });

  return res.json(newPlayer);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const team = await Team.findByPk(id, {
    include: [
      { model: Sport },
      { model: Player, as: 'TeamRoster' }
    ]
  });

  return res.json(team);
});

router.get("/", async (req, res) => {
  const teams = await Team.findAll({
    order: [['homeCity'], ['name', 'DESC']]
  });

  return res.json(teams);
});

module.exports = router;