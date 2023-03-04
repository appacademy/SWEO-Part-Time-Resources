const express = require("express");

const router = express.Router();

<<<<<<< HEAD
=======
// get our / route
>>>>>>> 74f87fc62a8d801a6cb4371c04093041fc3bade6
router.get("/", (req, res) => {
  return res.status(200).send("Welcome to our test application!");
});

module.exports = router;
