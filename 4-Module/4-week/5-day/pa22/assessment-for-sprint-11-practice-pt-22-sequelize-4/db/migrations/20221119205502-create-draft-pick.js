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
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'Fans' },
        type: Sequelize.INTEGER
      },
      playerId: {
        allowNull: false,
        references: { model: 'Players' },
        type: Sequelize.INTEGER
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