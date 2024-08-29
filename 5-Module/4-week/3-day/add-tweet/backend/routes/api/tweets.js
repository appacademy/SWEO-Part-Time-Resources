const express = require("express");
const { asyncHandler } = require("../../utils");

const router = express.Router();
const db = require("../../db/models");
const { DatabaseError } = require("pg");

const { Tweet } = db;

router.post(
  "/",
  asyncHandler(async (req, res) => {
    // const { message } = req.body;
    const body = {
      message: req.body.message.tweet,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    const newTweet = await Tweet.create(body);
    console.log(newTweet);
    return res.status(201).json(newTweet);
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const tweets = await Tweet.findAll();
    res.json(tweets);
  })
);

module.exports = router;
