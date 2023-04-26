const express = require('express');
const { asyncHandler } = require('../../utils');

const router = express.Router();
const db = require('../../db/models');

const { Tweet } = db;

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const tweets = await Tweet.findAll();
    res.json(tweets);
  })
);

router.post(
  '/',
  asyncHandler(async (req, res) => {
    //debugger
    console.log("IN ROUTE - req.body", req.body)

    const tweets = await Tweet.create(req.body);

    //debugger
    console.log("IN ROUTE - tweets", tweets.toJSON())
    res.json(tweets);
  })
);

module.exports = router;
