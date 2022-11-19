'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Players',
      'currentTeamId',
      {
        references: { model: 'Teams' },
        type: Sequelize.INTEGER
      }
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Players', 'currentTeamId')
  }
};
