'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Musicians', 
      'bandId', 
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Bands' },
        onDelete: 'CASCADE'
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Musicians', 'bandId');
  }
};
