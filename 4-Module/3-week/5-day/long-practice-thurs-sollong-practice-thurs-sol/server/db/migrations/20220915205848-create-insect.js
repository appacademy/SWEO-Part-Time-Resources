'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Insects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        // Phase 3 - constraints
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.STRING
      },
      fact: {
        type: Sequelize.STRING(240)
      },
      territory: {
        type: Sequelize.STRING
      },
      millimeters: {
        type: Sequelize.FLOAT,
        // Phase 3 - constraints
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // Phase 3 - constraints
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // Phase 3 - constraints
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Insects');
  }
};