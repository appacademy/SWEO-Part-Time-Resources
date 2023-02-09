'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cats', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cats')
  }
};
