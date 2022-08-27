const express = require('express');
const router = express.Router();

const { Fan } = require('../db/models');

router.get('/:fanId/drafts', async (req, res) => {
  const id = req.params.fanId;

  // const fan = await Fan.findOne({ where: { id: req.params.fanId } });
  // const fan = await Fan.findOne({ where: { id: id } });
  const fan = await Fan.findOne({ where: { id } });

  const players = await fan.getPlayers();

  res.json(players);
});

router.delete('/:id', async (req, res) => {
  const fan = await Fan.findByPk(req.params.id);

  await fan.destroy();

  res.json({
    message: 'Successfully deleted',
  });
});

module.exports = router;
