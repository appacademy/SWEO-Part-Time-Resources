const express = require('express');
const router = express.Router();

const { Player, Team } = require('../db/models');

router.get('/', async (req, res) => {
  let { firstName, number, page, size } = req.query;

  page = parseInt(page, 10)
  size = parseInt(size, 10)

  if(Number.isNaN(page)) page = 1
  if(Number.isNaN(size)) size = 2
  if(size > 10) size = 10 



  const where = {};
  if (firstName && firstName !== '') {
    where.firstName = firstName[0].toUpperCase() + firstName.slice(1);
  } else if (firstName === '') {
    res.status(400);
    return res.json({
      errors: [
        { message: 'firstName filter should not be empty' }
      ]
    });
  }

  if (number) {
    if (!isNaN(number) && number >= 0) {
      where.number = parseInt(number);
    } else {
      res.status(400);
      return res.json({
        errors: [
          { message: 'number filter should be a number greater or equal to 0' }
        ]
      });
    }
  }

  const players = await Player.findAll({
    where,
    limit : size,
    offset : size * (page -1)
  });
  return res.json({
    players,
    page,
    size
  });
});


router.get('/:id', async(req, res) => {
    let player = await Player.findByPk(req.params.id, {
        include : {
          as : 'CurrentTeam',
          model : Team
        }
    })
    res.json(player)
})

module.exports = router;