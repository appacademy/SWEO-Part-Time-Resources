'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
  // just need to make sense based from the migration and model files.

const validSuperheros = [
  // Your code here
  {
    name: 'WOLVERINE',
    alias: 'Logan',
    affiliation: 'X-Men',
    heightCm: 160,
    isMutant: true,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1994
  },  
  {
    name: 'THOR',
    alias: 'James',
    affiliation: 'Avengers',
    heightCm: 160,
    isMutant: true,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1996
  },
  {
    name: 'SUPERMAN',
    alias: 'Clark kent',
    affiliation: 'Justice League',
    heightCm: 160,
    isMutant: false,
    race: 'kryton',
    universe: 'DC',
    releaseYear: 1999
  },
  {
    name: 'JAMES',
    alias: 'nerdyyyyy',
    affiliation: 'Justice League',
    heightCm: 165,
    isMutant: true,
    race: 'human',
    universe: 'DC',
    releaseYear: 1981
  }, 
  {
    name: 'DYLAN',
    alias: 'Bed Boy',
    affiliation: 'X-Men',
    heightCm: 142,
    isMutant: false,
    race: 'somethingelse',
    universe: 'Marvel',
    releaseYear: 2001
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
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