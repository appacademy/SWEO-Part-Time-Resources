const express = require('express');
const usersRouter = express.Router();

const { setTokenCookie, restoreUser } = require("../utils/auth");
const { User, Tweet } = require('../db/models');

// Sign up
usersRouter.post('/', async (req, res) => {
  const { email, password, username } = req.body;
  const user = await User.signup({ email, username, password });

  await setTokenCookie(res, user);

  return res.json({
    user
  });
});

usersRouter.get('/:username/tweets', async (req, res) => {
  const tweets = await Tweet.findAll({
    include: {
      model: User,
      where: {
        username: req.params.username
      }
    }
  });
  return res.json(tweets);
});

module.exports = usersRouter;