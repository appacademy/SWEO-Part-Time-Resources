'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
  // just need to make sense based from the migration and model files.

const validSuperheros = [
  {
    name: 'CAPTAIN AMERICA',
    alias: 'Steve Rogers',
    affiliation: 'Avengers',
    heightCm: 185,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1941,
  },
  {
    name: 'WOLVERINE',
    alias: 'James Howlett',
    affiliation: 'X-Men',
    heightCm: 161,
    isMutant: true,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1982,
  },
  {
    name: 'THOR',
    alias: 'God of Thunder',
    affiliation: 'Avengers',
    heightCm: 190,
    isMutant: false,
    race: 'asgard',
    universe: 'Marvel',
    releaseYear: 1978,
  },
  {
    name: 'SUPERMAN',
    alias: 'Clark Kent',
    affiliation: 'Justice League',
    heightCm: 191,
    isMutant: false,
    race: 'kryton',
    universe: 'DC',
    releaseYear: 1978,
  },
  {
    name: 'RANDOM NAME',
    alias: 'random alias',
    affiliation: 'Justice League',
    heightCm: 150,
    isMutant: false,
    race: 'random',
    universe: 'DC',
    releaseYear: 2021,
  },
  // example invalid seed data:
  // {
  //   name: 'not valid',
  //   alias: 's',
  //   affiliation: 'Avengers',
  //   heightCm: 220,
  //   isMutant: null,
  //   race: 'ASGARD',
  //   universe: 'DC',
  //   releaseYear: 1978,
  // },
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