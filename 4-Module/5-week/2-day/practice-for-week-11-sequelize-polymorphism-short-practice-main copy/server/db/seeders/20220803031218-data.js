'use strict';

const { UserProfile, BlogPost, Image } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
