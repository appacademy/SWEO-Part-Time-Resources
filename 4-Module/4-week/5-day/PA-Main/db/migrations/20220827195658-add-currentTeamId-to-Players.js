'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Players', 'currentTeamId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Teams',
        key: 'id',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Players', 'currentTeamId');
  },
};
