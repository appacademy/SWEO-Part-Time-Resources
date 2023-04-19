'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //Add seed commands here.
    await queryInterface.bulkInsert('Users', [
      {firstName: 'John', lastName: 'Doe'},
      {firstName: 'Greg', lastName: 'Isales'}
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      firstName: ['John', 'Greg'] 
    })
  }
};
