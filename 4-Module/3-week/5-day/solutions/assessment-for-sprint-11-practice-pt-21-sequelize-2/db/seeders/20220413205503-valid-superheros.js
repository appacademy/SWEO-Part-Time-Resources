'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
// just need to make sense based from the migration and model files.

const validSuperheros = [
  // Your code here
  {
    name: 'JORGE',
    alias: 'THE BEST TA',
    affiliation: 'Avengers',
    heightCm: 180,
    isMutant: false,
    race: 'elf',
    universe: 'Marvel',
    releaseYear: 1998
  }, {
    name: 'IRIS',
    alias: 'THE BEST STUDENT',
    affiliation: 'Avengers',
    heightCm: 189,
    isMutant: false,
    race: 'elf',
    universe: 'Marvel',
    releaseYear: 1997
  }, {
    name: 'JOHN',
    alias: 'THE BESTTA',
    affiliation: 'Avengers',
    heightCm: 210,
    isMutant: false,
    race: 'elf',
    universe: 'Marvel',
    releaseYear: 1940
  }, {
    name: 'ADAM',
    alias: 'THE BEST',
    affiliation: 'Avengers',
    heightCm: 140,
    isMutant: false,
    race: 'elf',
    universe: 'Marvel',
    releaseYear: 2021
  }, {
    name: 'BRANDON',
    alias: 'THE TA',
    affiliation: 'Avengers',
    heightCm: 141,
    isMutant: false,
    race: 'elf',
    universe: 'Marvel',
    releaseYear: 1990
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    for (let superheroInfo of validSuperheros) {
      try {
        await Superhero.destroy({
          where: superheroInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validSuperheros,
};