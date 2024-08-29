'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Tweets',
      [
        {
          message: 'No Deal Like A Good Deal!',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          message: "We've got you covered!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          message: "Let's make today count!",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tweets', null, {});
    return queryInterface.bulkDelete('Users', null, {});
  }
};
