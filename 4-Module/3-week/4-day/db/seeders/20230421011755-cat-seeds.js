'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cats', [
      {name:'Pumpkin', color:'Orange'},
      {name:'Salem', color:'Black'},
      {name:'Checkers', color:'Calico'},
      {name:'Omally', color:'Orange'},
      {name:'Fluffy', color:'White'},
      {name:'Blair', color:'Black'},
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cats', {
      color: ['Orange','Black','Calico','White']
    });
  }
};
