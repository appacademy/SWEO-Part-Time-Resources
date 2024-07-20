'use strict';

const { Player } = require('../models');

const players = [
  {
    firstName: "Harry",
    lastName: "Maguire",
    number: 5,
    isRetired: false,
  },
  {
    firstName: "Aaron",
    lastName: "Judge",
    number: 99,
    isRetired: false,
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
  },
  {
    firstName: "Anthony",
    lastName: "Davis",
    number: 3,
    isRetired: false,
  },
  {
    firstName: "Russell",
    lastName: "Westbrook",
    number: 0,
    isRetired: false,
  },
  {
    firstName: "Paul",
    lastName: "George",
    number: 13,
    isRetired: false,
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
  },
  {
    firstName: "Tom",
    lastName: "Brady",
    number: 12,
    isRetired: false,
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
  },
  {
    firstName: "Kevin",
    lastName: "Durant",
    number: 7,
    isRetired: false,
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let playerInfo of players) {
      const { firstName, lastName, number, isRetired } = playerInfo;
      await Player.create({
        firstName,
        lastName,
        number,
        isRetired
      });
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', {}, {});
  }
};
