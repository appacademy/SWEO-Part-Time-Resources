'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Superheros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
      },
      alias: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      affiliation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      heightCm: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      isMutant: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      race: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      universe: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      releaseYear: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Superheros');
  }
};