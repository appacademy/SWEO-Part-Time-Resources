'use strict';

const { Op } = require('sequelize');
const {Supply, Classroom} = require("../models");

const testClassrooms = [
  { name: 'Mr. Tio', studentLimit: 24 },
  { name: 'Mr. Smith', studentLimit: 24 },
  { name: 'Ms. Pasion', studentLimit: 22 },
  { name: 'Ms. Jackson', studentLimit: 22 },
  { name: 'Ms. Ante', studentLimit: 24 },
  { name: 'Ms. Lee', studentLimit: 24 },
  { name: 'Ms. Meka', studentLimit: 26 },
  { name: 'Ms. Harris', studentLimit: 26 },
  { name: 'Mr. Peres', studentLimit: 32 },
  { name: 'Mr. Sanchez', studentLimit: 32 },
  { name: 'Ms. Cherian', studentLimit: 35 },
  { name: 'Ms. Rivera', studentLimit: 35 },
  { name: 'Ms. Arguello', studentLimit: 40 },
  { name: 'Ms. Turner', studentLimit: 40 },
  { name: 'Mr. Jones', studentLimit: 30 },
  { name: 'Mr. Collins', studentLimit: 30 },
  { name: 'Mr. Garcia', studentLimit: 38 },
  { name: 'Mr. Cooper', studentLimit: 38 },
  { name: 'Ms. Johnson', studentLimit: 29 },
  { name: 'Ms. Foster', studentLimit: 29 },
  { name: 'Mr. Miller', studentLimit: 20 },
  { name: 'Mr. Patel', studentLimit: 20 },
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
    await queryInterface.bulkInsert('Classrooms', testClassrooms);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Classrooms', { [Op.or]: testClassrooms });
  }
};
