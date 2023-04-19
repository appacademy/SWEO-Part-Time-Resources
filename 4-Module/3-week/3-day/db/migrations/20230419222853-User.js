'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Add altering commands here
    await queryInterface.createTable('users', {
      firstName: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(50)
      }
    });
  },

  async down (queryInterface, Sequelize) {
    // Add revert commands here
    await queryInterface.dropTable('users');
  }
};
