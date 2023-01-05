const express = require("express");

const router = express.Router();

// get our / route
router.get("/", (req, res) => {
  return res.status(200).send("Welcome to our test application!");
});

module.exports = router;
