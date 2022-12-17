'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addIndex(
      'Superheros',
      ['universe', 'releaseYear'],
      {
        unique: true
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex(
      'Superheros',
      ['universe', 'releaseYear']
    );
  }
};
