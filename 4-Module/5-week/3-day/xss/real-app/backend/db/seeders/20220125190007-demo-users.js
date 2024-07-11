'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'DemoUser',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'MaliciousUser',
        hashedPassword: bcrypt.hashSync('hunter12')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      username: ['DemoUser', 'MaliciousUser']
    }, {});
  }
};
