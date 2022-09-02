const express = require('express');
const sessionRouter = express.Router();

const { setTokenCookie, restoreUser } = require("../utils/auth");
const { User } = require('../db/models');

// Log in
sessionRouter.post('/', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.login({ username, password });

  if (!user) {
    const err = new Error('Invalid Credentials');
    err.status = 401;
    err.title = 'Invalid Credentials';
    err.errors = ['Invalid Credentials'];
    throw err;
  }

  await setTokenCookie(res, user);

  return res.json({
    user
  });
});


// Log out
sessionRouter.delete(
  '/',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);

// Restore session user
sessionRouter.get(
  '/',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        user: user.toSafeObject()
      });
    }
    return res.json({});
  }
);

module.exports = sessionRouter;