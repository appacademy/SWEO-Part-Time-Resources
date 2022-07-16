'use strict';

const artists = require('../../seeds/artists.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Artists', Object.values(artists), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Artists', null, {});
  }
};
