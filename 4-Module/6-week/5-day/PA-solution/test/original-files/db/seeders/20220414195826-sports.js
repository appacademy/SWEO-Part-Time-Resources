'use strict';

const { Sport } = require('../models');

const sports = [
  {
    name: "Soccer",
  },
  {
    name: "Baseball",
  },
  {
    name: "Basketball",
  },
  {
    name: "American Football",
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    await Sport.bulkCreate(sports, { validate: true });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sports', {
      where: { name: sports.map(sport => sport.name) }
    }, {});
  }
};
