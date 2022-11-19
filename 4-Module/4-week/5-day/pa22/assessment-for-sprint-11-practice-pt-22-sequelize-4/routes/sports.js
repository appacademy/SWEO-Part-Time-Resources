const express = require('express');
const router = express.Router();

const { Sport } = require("../db/models");

router.get("/", async (req, res) => {
  const sports = await Sport.findAll({
    order: [['name', 'DESC']]
  });

  return res.json(sports);
});

module.exports = router;