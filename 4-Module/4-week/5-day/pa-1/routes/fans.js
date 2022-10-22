const express = require('express');
const router = express.Router();

const { Fan, Player } = require('../db/models');

router.delete('/:fanId', async (req, res) => {
  const fan = await Fan.findByPk(req.params.fanId);
  if (!fan) {
    res.status(404);
    return res.json({ message: 'Fan Not Found' });
  }
  try {
    await fan.destroy();
    return res.json({ message: 'Successfully deleted' });
  } catch(err) {
    console.log(err);
  }
});

router.get('/:fanId/drafts', async (req, res) => {
  const fan = await Fan.findByPk(req.params.fanId, {
    include: [
      {
        model: Player
      }
    ]
  });
  if (!fan) {
    res.status(404);
    return res.json({ message: 'Fan Not Found' });
  }
  return res.json(fan.Players);
});

module.exports = router;