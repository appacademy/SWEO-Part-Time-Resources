'use strict';

const { insertReviewers } = require('../sql_helpers/reviewersSql')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.sequelize.query(insertReviewers)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Reviewers', {});
  }
};
