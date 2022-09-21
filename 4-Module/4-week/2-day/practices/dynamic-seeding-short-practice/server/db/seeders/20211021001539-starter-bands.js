'use strict';

const { Op } = require('sequelize');

const bands = [
  { name: 'The Falling Box' },
  { name: 'America The Piano' },
  { name: 'Loved Autumn' },
  { name: 'Playin Sound' },
  { name: 'The King River' }
];

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
   
    await queryInterface.bulkInsert('Bands', bands)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Bands', { [Op.or]: bands })
  }
};