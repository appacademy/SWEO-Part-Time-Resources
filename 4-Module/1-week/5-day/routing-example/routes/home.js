const express = require('express');
const gamesRouter = require('./games');
// Create the router instance
const router = express.Router();

router.use('/games', gamesRouter);

router.get('/', (req, res) => {
  res.send('Our team homepage');
});

module.exports = router;
