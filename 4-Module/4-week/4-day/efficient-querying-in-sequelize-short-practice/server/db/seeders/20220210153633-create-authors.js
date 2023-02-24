'use strict';

const { insertAuthors } = require('../sql_helpers/authorsSql')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.sequelize.query(insertAuthors)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Authors', {});
  }
};
