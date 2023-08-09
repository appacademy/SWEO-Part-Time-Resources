'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Trees', 'height', { type: Sequelize.INTEGER, allowNull: false })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Trees', 'height')
  }
};
