'use strict';

const { Op } = require('sequelize');

const stores = [
  { name: 'Instruments r Us',
    location: 'LA'
  },
  { name: 'Bay Area Sounds',
    location: 'SF'
  },
  { name: 'East Coast Beats',
    location: 'NY'
  },
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
    await queryInterface.bulkInsert('Stores', stores)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Stores', { [Op.or]: stores })
  }
};