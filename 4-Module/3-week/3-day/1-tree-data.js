'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trees', [
      {
        species: 'Apple',
        location: 'Vermont',
        age: 40
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trees', null, {});
  }
};
