'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addConstraint('Trees', {
    fields: ['location'],
    type: 'unique',
    name: 'trees_location_unique_constraint'
   });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Trees', 'trees_location_unique_constraint');
  }
};
