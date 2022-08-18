'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Colors', {
      fields: ['name'],
      type: 'unique',
      name: 'name_unique_const',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Colors', 'name_unique_const');
  },
};
