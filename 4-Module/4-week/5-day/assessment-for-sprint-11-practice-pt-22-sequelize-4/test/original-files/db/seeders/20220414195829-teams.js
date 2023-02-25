'use strict';

const { Team, Sport } = require('../models');

const teams = [
  {
    name: "Manchester United",
    homeCity: "Manchester",
    sport: "Soccer",
  },
  {
    name: "Liverpool FC",
    homeCity: "Liverpool",
    sport: "Soccer",
  },
  {
    name: "New York Yankees",
    homeCity: "New York City",
    sport: "Baseball",
  },
  {
    name: "Boston Red Sox",
    homeCity: "Boston",
    sport: "Baseball",
  },
  {
    name: "Brooklyn Nets",
    homeCity: "New York City",
    sport: "Basketball",
  },
  {
    name: "New York Knicks",
    homeCity: "New York City",
    sport: "Basketball",
  },
  {
    name: "Los Angeles Lakers",
    homeCity: "Los Angeles",
    sport: "Basketball",
  },
  {
    name: "Los Angeles Clippers",
    homeCity: "Los Angeles",
    sport: "Basketball",
  },
  {
    name: "Green Bay Packers",
    homeCity: "Green Bay",
    sport: "American Football",
  },
  {
    name: "Tampa Bay Buccaneers",
    homeCity: "Tampa Bay",
    sport: "American Football",
  },
  {
    name: "New York Giants",
    homeCity: "New York City",
    sport: "American Football",
  },
  {
    name: "New England Patriots",
    homeCity: "Boston",
    sport: "American Football",
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      for (let teamInfo of teams) {
        const { name, homeCity } = teamInfo;
        const foundSport = await Sport.findOne({
          where: { name: teamInfo.sport }
        });
        await Team.create({
          name,
          homeCity,
          sportId: foundSport.id
        });
      }
    } catch(err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teams', {
      where: { name: teams.map(team => team.name) }
    }, {});
  }
};
