const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json('GET /colors');
});

router.get('/:type', (req, res) => {
  // res.json('GET /colors/:name')
  res.json(`You got ${req.params.type}`);
});

module.exports = router;
