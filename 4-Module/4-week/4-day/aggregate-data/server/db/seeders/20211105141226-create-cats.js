'use strict';

const { insertCats } = require('../sql_helpers/catsSql')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(insertCats)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Cats', {});
  }
};
