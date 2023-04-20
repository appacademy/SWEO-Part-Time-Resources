'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Cats', [
      {name:'Tabby Joe', color:'Orange'},
      {name:'Midnight', color:'Black'},
      {name:'Patches', color:'Orange'},
      {name:'Skranky', color:'White'},
      {name:'Lemon', color:'Calico'},
      {name:'Junior', color:'Orange'}
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cats', {
      color: ['Orange','Black','White','Calico']
    });
  }
};
