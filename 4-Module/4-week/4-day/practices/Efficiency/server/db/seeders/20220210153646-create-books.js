'use strict';

const { insertBooks } = require('../sql_helpers/booksSql')

module.exports = {
   up: async (queryInterface, Sequelize) => {
     return await queryInterface.sequelize.query(insertBooks)
   },

   down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('Books', {});
   }
};
