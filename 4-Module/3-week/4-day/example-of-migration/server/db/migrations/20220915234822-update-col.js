'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Colors', 'shade', Sequelize.STRING)
  },
  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Colors', 'shade' )
  }
};
