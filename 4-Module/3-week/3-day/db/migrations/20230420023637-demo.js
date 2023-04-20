'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Add altering commands here
    await queryInterface.createTable('users', {
      firstName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      lastName: Sequelize.STRING(20)
    })
  },

  async down (queryInterface, Sequelize) {
    // Add reverting commands here
    await queryInterface.dropTable('users');
  }
};
