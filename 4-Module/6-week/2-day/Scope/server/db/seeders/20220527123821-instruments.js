'use strict';

const { Op } = require('sequelize');

const instruments = [
  { name: 'piano',
    type:  'keyboard',
    storeId: 1 },
  { name: 'organ',
    type:  'keyboard',
    storeId: 1 },
  { name: 'accordion',
    type: 'keyboard',
    storeId: 1 },
  { name: 'drums',
    type: 'percussion',
    storeId: 1 },
  { name: 'xylophone',
    type: 'percussion',
    storeId: 1 },
  { name: 'cymbal',
    type: 'percussion',
    storeId: 1 },
  { name: 'guitar',
    type: 'string',
    storeId: 1 },
  { name: 'bass',
    type: 'string',
    storeId: 1 },
  { name: 'violin',
    type: 'string',
    storeId: 1 },
  { name: 'cello',
    type: 'string',
    storeId: 1 },
  { name: 'harp',
    type: 'string',
    storeId: 1 },
  { name: 'trumpet',
    type: 'brass wind',
    storeId: 1 },
  { name: 'french horn',
    type: 'brass wind',
    storeId: 1 },
  { name: 'saxophone',
    type: 'woodwind',
    storeId: 1 },
  { name: 'flute',
    type: 'woodwind',
    storeId: 1 },
  { name: 'clarinet',
    type: 'woodwind',
    storeId: 1 },
  { name: 'piano',
    type:  'keyboard',
    storeId: 2 },
  { name: 'drums',
    type: 'percussion',
    storeId: 2 },
  { name: 'xylophone',
    type: 'percussion',
    storeId: 2 },
  { name: 'guitar',
    type: 'string',
    storeId: 2 },
  { name: 'bass',
    type: 'string',
    storeId: 2 },
  { name: 'violin',
    type: 'string',
    storeId: 2 },
  { name: 'cello',
    type: 'string',
    storeId: 2 },
  { name: 'trumpet',
    type: 'brass wind',
    storeId: 2 },
  { name: 'french horn',
    type: 'brass wind',
    storeId: 2 },
  { name: 'flute',
    type: 'woodwind',
    storeId: 2 },
  { name: 'piano',
    type:  'keyboard',
    storeId: 3 },
  { name: 'organ',
    type:  'keyboard',
    storeId: 3 },
  { name: 'drums',
    type: 'percussion',
    storeId: 3 },
  { name: 'cymbal',
    type: 'percussion',
    storeId: 3 },
  { name: 'guitar',
    type: 'string',
    storeId: 3 },
  { name: 'bass',
    type: 'string',
    storeId: 3 },
  { name: 'violin',
    type: 'string',
    storeId: 3 },
  { name: 'cello',
    type: 'string',
    storeId: 3 },
  { name: 'harp',
    type: 'string',
    storeId: 3 },
  { name: 'trumpet',
    type: 'brass wind',
    storeId: 3 },
  { name: 'french horn',
    type: 'brass wind',
    storeId: 3 },
  { name: 'saxophone',
    type: 'woodwind',
    storeId: 3 },
  { name: 'flute',
    type: 'woodwind',
    storeId: 3 },
]

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
    await queryInterface.bulkInsert('Instruments', instruments)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Instruments', { [Op.or]: instruments })
  }
};