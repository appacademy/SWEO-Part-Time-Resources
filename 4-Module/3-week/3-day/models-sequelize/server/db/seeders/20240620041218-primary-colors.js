'use strict';
const {Color} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await Color.bulkCreate([
    {name: 'red'},
    {name: 'blue'},
    {name: 'yellow'}
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Colors',{
      name: ['red', 'blue', 'yellow']
    });
  }
};
