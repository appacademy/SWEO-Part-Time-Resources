'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Teams', 
      'sportId',
      {
        type: Sequelize.INTEGER,
        references: { model: 'Sports' },
        onDelete: 'CASCADE', // not necessary
        allowNull: false, // not necessary
      },
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Teams', 'sportId');
  }
};
