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
// router.put()
// router.delete()

module.exports = router;