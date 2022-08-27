const express = require('express');
const router = express.Router();

const { Sport } = require('../db/models');

router.get('/', async (req, res) => {
  const allSports = await Sport.findAll({ order: [['name', 'DESC']] });

  res.json(allSports);
});

module.exports = router;
