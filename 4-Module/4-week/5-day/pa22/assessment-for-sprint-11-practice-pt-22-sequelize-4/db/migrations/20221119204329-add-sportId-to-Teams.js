'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Teams',
      'sportId',
      {
        allowNull: false,
        references: { model: 'Sports' },
        type: Sequelize.INTEGER
      }
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Teams', 'sportId');
  }
};
