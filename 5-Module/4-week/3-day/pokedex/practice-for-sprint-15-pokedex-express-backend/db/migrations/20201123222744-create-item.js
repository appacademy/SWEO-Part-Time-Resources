'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      happiness: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      pokemonId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Pokemons",
          },
        },
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
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Items');
  }
};