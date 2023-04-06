const express = require('express');
const router = express.Router();

const roster = {
  pg: 'Randy',
  sg: 'Anthony',
  sf: 'Noah',
  pf: 'Benjamin',
  c: 'Miles'
}

router.get('/', (req, res) => {
  res.json(roster);
})

module.exports = router;