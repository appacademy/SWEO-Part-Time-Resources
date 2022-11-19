const express = require('express');
const router = express.Router();

const { Fan, Player } = require("../db/models");

router.get('/:fanId/drafts', async (req, res) => {
  const { fanId } = req.params;

  const fan = await Fan.findByPk(fanId, {
    include: [
      { model: Player }
    ]
  });

  return res.json(fan.Players);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const fan = await Fan.findByPk(id);

  await fan.destroy();

  return res.json({
    message: "Successfully deleted"
  });
});

module.exports = router;