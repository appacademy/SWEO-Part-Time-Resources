'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Games', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      numPlayers: {
        type: Sequelize.INTEGER
      },
      estPlayTime: {
        type: Sequelize.INTEGER
      },
      isCool : {
        type : Sequelize.BOOLEAN
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Games')
  }
};
