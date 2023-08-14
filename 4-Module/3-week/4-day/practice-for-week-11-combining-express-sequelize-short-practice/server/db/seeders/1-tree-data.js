'use strict';
const { Tree } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Tree.bulkCreate([
      {
        species: 'Apple',
        location: 'Vermont',
        age: 40
      }
      ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trees', {
      species: 'Apple',
      location: 'Vermont',
      age: 40
    });
  }
};
