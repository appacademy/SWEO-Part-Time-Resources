'use strict';

const { Op } = require('sequelize');

const puppies = [
  {
    name: 'Cooper',
    age_yrs: 1,
    breed: 'Miniature Schnauzer',
    weight_lbs: 18,
    microchipped: true
  },
  {
    name: 'Indie',
    age_yrs: 0.5,
    breed: 'Yorkshire Terrier',
    weight_lbs: 13,
    microchipped: true
  },
  {
    name: 'Kota',
    age_yrs: 0.7,
    breed: 'Australian Shepherd',
    weight_lbs: 26,
    microchipped: false
  },
  {
    name: 'Zoe',
    age_yrs: 0.8,
    breed: 'Korean Jindo',
    weight_lbs: 32,
    microchipped: true
  },
  {
    name: 'Charley',
    age_yrs: 1.5,
    breed: 'Basset Hound',
    weight_lbs: 25,
    microchipped: false
  },
  {
    name: 'Ladybird',
    age_yrs: 0.6,
    breed: 'Labradoodle',
    weight_lbs: 20,
    microchipped: true
  },
  {
    name: 'Callie',
    age_yrs: 0.9,
    breed: 'Corgi',
    weight_lbs: 16,
    microchipped: false
  },
  {
    name: 'Jaxson',
    age_yrs: 0.4,
    breed: 'Beagle',
    weight_lbs: 19,
    microchipped: true
  },
  {
    name: 'Leinni',
    age_yrs: 1,
    breed: 'Miniature Schnauzer',
    weight_lbs: 25,
    microchipped: true
  },
  {
    name: 'Max',
    age_yrs: 1.6,
    breed: 'German Shepherd',
    weight_lbs: 65,
    microchipped: false
  }
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

    await queryInterface.bulkInsert('Puppies', puppies)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Puppies', { [Op.or]: puppies })
  }
};