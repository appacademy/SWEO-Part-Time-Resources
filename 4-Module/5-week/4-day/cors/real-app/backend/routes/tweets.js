const express = require('express');
const tweetsRouter = express.Router();

const { requireAuth } = require("../utils/auth");
const { Tweet, User } = require('../db/models');

tweetsRouter.get('/', async (req, res) => {
  const tweets = await Tweet.findAll({
    include: {
      model: User
    }
  });
  return res.json(tweets);
});

tweetsRouter.post('/', requireAuth, async (req, res) => {
  const { body } = req.body;
  if (req.user) {
    try {
      const tweet = await req.user.createTweet({ body });
      return res.json(tweet);
    } catch (err) {
      err.status = 400;
      throw err;
    }
  }

  const err = new Error('Unauthorized');
  err.status = 401;
  throw err;
});

module.exports = tweetsRouter;