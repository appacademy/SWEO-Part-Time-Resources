'use strict';

const { types } = require("../models/pokemonType");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: true,
      },
      attack: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      defense: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true,
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM(types),
      },
      moves: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      encounterRate: {
        allowNull: false,
        type: Sequelize.DECIMAL(3, 2),
        defaultValue: 1.00,
      },
      catchRate: {
        allowNull: false,
        type: Sequelize.DECIMAL(3, 2),
        defaultValue: 1.00,
      },
      captured: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pokemons');
  }
};
