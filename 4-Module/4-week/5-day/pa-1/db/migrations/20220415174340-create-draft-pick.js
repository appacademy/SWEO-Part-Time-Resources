'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DraftPicks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Fans' },
        onDelete: 'CASCADE', // necessary to pass test specs
      },
      playerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Players' },
        onDelete: 'CASCADE', // not necessary
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DraftPicks');
  }
};