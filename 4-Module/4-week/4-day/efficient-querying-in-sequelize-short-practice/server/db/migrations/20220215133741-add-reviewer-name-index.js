'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('Reviewers', ['firstName', 'lastName']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('Reviewers', ['firstName', 'lastName']);
  }
};
