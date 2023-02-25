'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
      'Players',
      'currentTeamId',
      {
        type: Sequelize.INTEGER,
        references: { model: 'Teams' },
        // allowNull: false,
        // onDelete: 'CASCADE'
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Players', 'currentTeamId');

  }
};
