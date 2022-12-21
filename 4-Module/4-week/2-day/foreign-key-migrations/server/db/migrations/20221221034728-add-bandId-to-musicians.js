'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Musicians', 'bandId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {model: 'Bands'},
      onDelete: 'CASCADE'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
