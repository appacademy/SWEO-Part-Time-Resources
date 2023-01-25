'use strict';

const { Op } = require('sequelize');

const instruments = [
  { type: 'piano' },
  { type: 'guitar' },
  { type: 'drums' },
  { type: 'bass' },
  { type: 'violin' },
  { type: 'cello' },
  { type: 'trumpet' },
  { type: 'saxophone' }
]

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
   
    await queryInterface.bulkInsert('Instruments', instruments)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Instruments', { [Op.or]: instruments })
  }
};
