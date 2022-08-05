const express = require('express');

// Create the router instance
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Our team homepage');
});

module.exports = router;
