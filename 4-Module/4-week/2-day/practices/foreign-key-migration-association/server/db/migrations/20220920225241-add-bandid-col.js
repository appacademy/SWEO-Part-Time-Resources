'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Musicians', 'bandId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        // this `model` in the migration file to add IS THE TABLE, not the model
        model: 'Bands',
        key: 'id',
        onDelete: 'cascade'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Musicians', 'bandId')
  }
};
