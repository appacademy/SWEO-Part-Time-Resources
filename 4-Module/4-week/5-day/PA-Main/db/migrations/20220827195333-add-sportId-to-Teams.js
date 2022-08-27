'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Teams', 'sportId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Sports',
        key: 'id',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Teams', 'sportId');
  },
};
