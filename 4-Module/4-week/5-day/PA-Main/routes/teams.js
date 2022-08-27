const express = require('express');
const router = express.Router();

const { Team, Sport, Player } = require('../db/models');

router.get('/', async (req, res) => {
  const allTeams = await Team.findAll({
    order: [['homeCity'], ['name', 'DESC']],
  });

  res.json(allTeams);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const team = await Team.findOne({
    where: { id },
    include: [{ model: Sport }, { model: Player, as: 'TeamRoster' }],
  });

  res.json(team);
});

router.post('/:id/players', async (req, res) => {
  const team = await Team.findOne({ where: { id: req.params.id } });

  // const { firstName, lastName, number, isRetired } = req.body;
  // const newPlayer = await Team.createPlayer(
  //   firstName,
  //   lastName,
  //   number,
  //   isRetired
  // );

  // const newPlayer = await team.createPlayer(req.body); //! Before alias
  const newPlayer = await team.createTeamRoster(req.body); //! After alias

  res.json(newPlayer);
});

module.exports = router;
