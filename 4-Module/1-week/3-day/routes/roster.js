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
  // Send roster data
  res.json(roster);
})

router.put('/:position', (req, res) => {
  // Update position with data from request body
  const position = req.params.position;   // e.g. pg
  const newPlayer = req.body.name;        // e.g. Cameron
  roster[position] = newPlayer;
  res.json(roster);
})

router.delete('/:position', (req, res) => {
  // Remove player from position
  const position = req.params.position;
  delete roster[position];
  res.json(roster);
})

module.exports = router;