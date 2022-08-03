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
		references: {
			model: 'Fans',
			key: 'id'
		},
		onDelete: 'cascade',
		allowNull: false
      },
      playerId: {
        type: Sequelize.INTEGER,
		references: {
			model: 'Players',
			key: 'id'
		},
		allowNull: false
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
    await queryInterface.dropTable('DraftPicks');
  }
};
