'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Colors', {
      fields: ['name'],
      name: 'colors_name_unique_constraint',
      type: 'unique'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Colors', 'colors_name_unique_constraint')
  }
};
