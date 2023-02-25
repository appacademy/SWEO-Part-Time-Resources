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
    try {
      await Sport.bulkCreate(sports, { validate: true });
    } catch(err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sports', {
      where: { name: sports.map(sport => sport.name) }
    }, {});
  }
};
