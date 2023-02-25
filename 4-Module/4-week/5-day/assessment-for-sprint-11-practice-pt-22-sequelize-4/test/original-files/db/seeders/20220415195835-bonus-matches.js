'use strict';

// BONUS

const { Match, Team } = require('../models');

const matches = [
  {
    homeTeam: "Green Bay Packers",
    awayTeam: "Tampa Bay Buccaneers",
    winner: "Green Bay Packers",
    matchDate: '2022-02-28',
  },
  {
    homeTeam: "Los Angeles Lakers",
    awayTeam: "Los Angeles Clippers",
    winner: "Los Angeles Lakers",
    matchDate: '2022-03-30',
  },
  {
    homeTeam: "Los Angeles Clippers",
    awayTeam: "Los Angeles Lakers",
    winner: "Los Angeles Lakers",
    matchDate: '2022-05-12',
  },
  {
    homeTeam: "Los Angeles Lakers",
    awayTeam: "Brooklyn Nets",
    winner: "Los Angeles Lakers",
    matchDate: '2022-04-03',
  },
  {
    homeTeam: "Los Angeles Lakers",
    awayTeam: "New York Knicks",
    winner: "New York Knicks",
    matchDate: '2022-02-16',
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      if (Match) {
        for (let matchInfo of matches) {
          const { matchDate } = matchInfo;
          const foundHomeTeam = await Team.findOne({
            where: { name: matchInfo.homeTeam }
          });
          const foundAwayTeam = await Team.findOne({
            where: { name: matchInfo.awayTeam }
          });
          const foundWinner = await Team.findOne({
            where: { name: matchInfo.winner }
          });
          await Match.create({
            matchDate,
            homeTeamId: foundHomeTeam.id,
            awayTeamId: foundAwayTeam.id,
            winnerId: foundWinner.id,
          });
        }
      }
    } catch(err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    if (Match) {
      await queryInterface.bulkDelete('Matches', {
        where: {}
      }, {});
    }
  }
};