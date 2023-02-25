'use strict';

const { Player, Team } = require('../models');

const players = [
  {
    firstName: "Harry",
    lastName: "Maguire",
    number: 5,
    isRetired: false,
    currentTeam: "Manchester United",
  },
  {
    firstName: "Aaron",
    lastName: "Judge",
    number: 99,
    isRetired: false,
    currentTeam: "New York Yankees",
  },
  {
    firstName: "Babe",
    lastName: "Ruth",
    number: 3,
    isRetired: true,
  },
  {
    firstName: "Alex",
    lastName: "Rodriguez",
    number: 13,
    isRetired: true,
  },
  {
    firstName: "LeBron",
    lastName: "James",
    number: 6,
    isRetired: false,
    currentTeam: "Los Angeles Lakers",
  },
  {
    firstName: "Anthony",
    lastName: "Davis",
    number: 3,
    isRetired: false,
    currentTeam: "Los Angeles Lakers",
  },
  {
    firstName: "Russell",
    lastName: "Westbrook",
    number: 0,
    isRetired: false,
    currentTeam: "Los Angeles Lakers",
  },
  {
    firstName: "Paul",
    lastName: "George",
    number: 13,
    isRetired: false,
    currentTeam: "Los Angeles Clippers",
  },
  {
    firstName: "Kobe",
    lastName: "Bryant",
    number: 24,
    isRetired: true,
  },
  {
    firstName: "Aaron",
    lastName: "Rodgers",
    number: 12,
    isRetired: false,
    currentTeam: "Green Bay Packers",
  },
  {
    firstName: "Tom",
    lastName: "Brady",
    number: 12,
    isRetired: false,
    currentTeam: "Tampa Bay Buccaneers",
  },
  {
    firstName: "Rob",
    lastName: "Gronkowski",
    number: 87,
    isRetired: true,
  },
  {
    firstName: "Kawhi",
    lastName: "Leonard",
    number: 2,
    isRetired: false,
    currentTeam: "Los Angeles Clippers",
  },
  {
    firstName: "Kevin",
    lastName: "Durant",
    number: 7,
    isRetired: false,
    currentTeam: "Brooklyn Nets",
  },
  {
    firstName: "Kyrie",
    lastName: "Irving",
    number: 11,
    isRetired: false,
    currentTeam: "Brooklyn Nets",
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      for (let playerInfo of players) {
        const { firstName, lastName, number, isRetired } = playerInfo;
        let foundTeam;
        if (playerInfo.currentTeam) {
          foundTeam = await Team.findOne({
            where: { name: playerInfo.currentTeam }
          });
        }
        await Player.create({
          firstName,
          lastName,
          number,
          isRetired,
          currentTeamId: foundTeam ? foundTeam.id : null
        });
      }
    } catch(err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', {}, {});
  }
};
