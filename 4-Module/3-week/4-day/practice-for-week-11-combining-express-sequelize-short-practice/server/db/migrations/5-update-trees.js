'use strict';

const { Tree } = require('../models');

const originalVals = [{id: 1, name: 'Apple'}];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.bulkUpdate('Trees', {
      species: 'Plum'
    }, {
      id: 1
    }, {
      validate: true, individualHooks: true
    });
  },

  async down (queryInterface, Sequelize) {
    for(const { species, id } of originalVals){
      await queryInterface.bulkUpdate('Trees', { species }, { id });
    }
  }
};
