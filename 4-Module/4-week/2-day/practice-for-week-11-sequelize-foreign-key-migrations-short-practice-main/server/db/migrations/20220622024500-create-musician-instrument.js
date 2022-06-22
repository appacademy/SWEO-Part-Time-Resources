'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MusicianInstruments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      instrumentId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Instruments'
        }
      },
      musicianId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Musicians'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MusicianInstruments');
  }
};