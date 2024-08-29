const router = require("express").Router();
const tweetsRouter = require("./tweets.js");

router.use("/tweets", tweetsRouter);

module.exports = router;
