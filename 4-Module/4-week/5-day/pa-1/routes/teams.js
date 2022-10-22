const express = require('express');
const router = express.Router();

const { Team, Sport, Player, Match } = require('../db/models');

router.get('/', async (req, res) => {
  const teams = await Team.findAll({
    order: [['homeCity', 'ASC'], ['name', 'DESC']]
  });
  return res.json(teams);
});

router.get('/:id', async (req, res) => {
  const team = await Team.findByPk(req.params.id, {
    include: [
      {
        model: Sport,
      },
      {
        model: Player, as: 'TeamRoster'
      }
    ]
  });
  if (!team) {
    res.status(404);
    return res.json({ message: 'Team Not Found' });
  }
  return res.json(team);
});

router.post('/:id/players', async (req, res) => {
  const teamId = req.params.id;
  const { firstName, lastName, number, isRetired } = req.body;

  const team = await Team.findByPk(teamId);

  // const newPlayer = await Player.create({
  //   firstName,
  //   lastName,
  //   number,
  //   isRetired,
  //   currentTeamId: team.id
  // })

  // This has to be changed since player becomes aliased
  // as TeamRoster
  // const newPlayer = await team.createPlayer(req.body);

  const newPlayer = await team.createTeamRoster(req.body);

  return res.json(newPlayer)
})

// CHALLENGE BONUS:
router.get('/:id/homeMatchesWon', async (req, res) => {
  const team = await Team.findByPk(req.params.id);
  if (!team) {
    res.status(404);
    return res.json({ message: 'Team Not Found' });
  }
  const matches = await Match.findAll({
    include: [
      {
        model: Team,
        as: 'AwayTeam',
      },
    ],
    where: {
      homeTeamId: req.params.id,
      winnerId: req.params.id,
    }
  });
  // Alternative solution:
  // const matches = await Match.findAll({
  //   include: [
  //     {
  //       model: Team,
  //       as: 'HomeTeam',
  //       where: { id: req.params.id }
  //     },
  //     {
  //       model: Team,
  //       as: 'AwayTeam',
  //     },
  //     {
  //       model: Team,
  //       as: 'Winner',
  //       where: { id: req.params.id }
  //     },
  //   ],
  // });
  return res.json(matches);
});

module.exports = router;