const express = require('express');
const router = express.Router();

router.get("/score", (req, res) => {
  res.send("The score is 5-0");
})
router.get("/", (req, res) => {
  res.send('This is the Team Homepage');
})

module.exports = router;