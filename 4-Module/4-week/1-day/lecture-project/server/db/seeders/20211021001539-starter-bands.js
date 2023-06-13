'use strict';

const { Op } = require('sequelize');
const { Band } = require('../models');

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
   
    try {
      await Band.bulkCreate(bands, { validate: true });
    } catch(err) {
      console.error(err);
      throw err;
    }
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
