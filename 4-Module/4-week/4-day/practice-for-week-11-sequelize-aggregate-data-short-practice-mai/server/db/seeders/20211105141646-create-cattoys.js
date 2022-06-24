'use strict';

const { insertCatToys } = require('../sql_helpers/cattoysSql')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(insertCatToys)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('CatToys', {});
  }
};
