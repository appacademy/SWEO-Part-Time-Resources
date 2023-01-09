const express = require("express");

const router = express.Router();

// get our / route
router.get("/", (req, res) => {
  return res.status(200).send("Welcome to our test router application!");
});

module.exports = router;
