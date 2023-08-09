'use strict';
const { User, Tweet } = require('../models');

const tweets = [
  {
    body: "This is a tweet written by the DemoUser."
  },
  {
    body: "This is how normal users intend to post tweets."
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    const demoUser = await User.findOne({
      where: {
        username: 'DemoUser'
      }
    });
    for (let tweet of tweets) {
      await demoUser.createTweet(tweet);
    }
  },

  async down (queryInterface, Sequelize) {
    const demoUser = await User.findOne({
      where: {
        username: 'DemoUser'
      }
    });
    await Tweet.destroy({
      where: {
        authorId: demoUser.id
      },
    });
  }
};
