'use strict';

const { insertToys } = require('../sql_helpers/toysSql')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(insertToys)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Toys', {});
  }
};
