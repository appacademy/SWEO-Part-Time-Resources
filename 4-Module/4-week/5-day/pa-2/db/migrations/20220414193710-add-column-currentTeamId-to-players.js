'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Players', 
      'currentTeamId', 
      {
        type: Sequelize.INTEGER,
        references: { model: 'Teams' },
        // allowNull: false, // will fail seeds
      },
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Players', 'currentTeamId');
  }
};