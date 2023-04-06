const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Our Team Homepage');
});

module.exports = router;