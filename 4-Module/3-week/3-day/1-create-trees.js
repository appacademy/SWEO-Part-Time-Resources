'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.createTable('Trees', { id: Sequelize.INTEGER });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Trees');
  }
};
