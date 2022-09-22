'use strict';

const { Op } = require('sequelize');

const bands = [
  { name: 'The Falling Box', createdAt: new Date(2020, 6, 15, 12, 30, 10) },
  { name: 'America The Piano', createdAt: new Date(2020, 6, 15, 12, 30, 15) },
  { name: 'Loved Autumn', createdAt: new Date(2020, 6, 15, 12, 30, 20) },
  { name: 'Playin Sound', createdAt: new Date(2020, 6, 15, 12, 30, 25) },
  { name: 'The King River', createdAt: new Date(2020, 6, 15, 12, 30, 30) }
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