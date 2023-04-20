'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //Add seed commands here
    await queryInterface.bulkInsert('User', [
      {firstName: 'Greg', lastName: 'Isales'},
      {firstName: 'Tristan', lastName: 'Huckabee'}
    ])
  },

  async down (queryInterface, Sequelize) {
    //Add commands to revert seed here
    await queryInterface.bulkDelete('User', {
      first: ['Greg', 'Tristan']
    });
  }
};
