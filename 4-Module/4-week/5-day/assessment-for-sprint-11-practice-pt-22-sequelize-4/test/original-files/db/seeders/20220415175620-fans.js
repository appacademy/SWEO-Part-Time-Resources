'use strict';

const { Fan } = require('../models');

const fans = [
  {
    username: "FootballFan",
  },
  {
    username: "BasketballFan",
  },
  {
    username: "SoccerFan1",
  },
  {
    username: "SoccerFan2",
  },
  {
    username: "SoccerFan3",
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Fan.bulkCreate(fans, { validate: true });
    } catch(err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fans', {
      where: { username: fans.map(sport => sport.username) }
    }, {});
  }
};
