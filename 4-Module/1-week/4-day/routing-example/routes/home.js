const express = require('express');

// Create the router instance
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Our team homepage');
});

router.get('/games', (req, res) => {
  res.send('We have 50 games left this season');
});

module.exports = router;
