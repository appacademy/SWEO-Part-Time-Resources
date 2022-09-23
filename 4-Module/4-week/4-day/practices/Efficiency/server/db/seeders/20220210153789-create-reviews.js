'use strict';

const { insertReviews } = require('../sql_helpers/reviewsSql')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.sequelize.query(insertReviews)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Reviews', {});
  }
};
