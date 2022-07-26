'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shirts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      ownerId: {
        type: Sequelize.INTEGER,
		references: {
			model: 'Owners',
			key: 'id'
		},
		onDelete: 'cascade'
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
		defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shirts');
  }
};
