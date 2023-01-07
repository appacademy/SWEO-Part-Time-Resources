const express = require('express');

const router = express.Router();

//!!START SILENT
// GET /people
//!!END
router.get("/", (req, res) => {
  res.json("Number 1");
});

//!!START SILENT
// POST /people/:personId/likes
//!!END
router.post("/:personId/likes", (req, res) => {
  res.json("Number 2");
});

//!!START SILENT
// DELETE /people/:personId
//!!END
router.delete("/:personId", (req, res) => {
  res.json("Number 3");
});

//!!START SILENT
// GET /people/best-dressed/comments
//!!END
router.get("/best-dressed/comments", (req, res) => {
  res.json("Number 4");
});

//!!START SILENT
// GET /people/people/:name/lookup
//!!END
router.get("/people/:name/lookup", (req, res) => {
  res.json("Number 5");
});

module.exports = router;