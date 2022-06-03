const express = require('express');

const router = express.Router();

// GET /people
router.get("/", (req, res) => {
  res.json("Number 1");
});

// POST /people/:personId/likes
router.post("/:personId/likes", (req, res) => {
  res.json("Number 2");
});

// DELETE /people/:personId
router.delete("/:personId", (req, res) => {
  res.json("Number 3");
});

// GET /people/best-dressed/comments
router.get("/best-dressed/comments", (req, res) => {
  res.json("Number 4");
});

// GET /people/people/:name/lookup
router.get("/people/:name/lookup", (req, res) => {
  res.json("Number 5");
});

module.exports = router;