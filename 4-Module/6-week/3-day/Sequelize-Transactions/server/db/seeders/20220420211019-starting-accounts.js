'use strict';

const { Op } = require('sequelize');

const accounts = [
  {
    firstName: 'Amy',
    lastName: 'Pond',
    balance: 900
  },
  {
    firstName: 'Rose',
    lastName: 'Tyler',
    balance: 600
  },
  {
    firstName: 'Martha',
    lastName: 'Jones',
    balance: 800
  },
  {
    firstName: 'Donna',
    lastName: 'Noble',
    balance: 200
  },
  {
    firstName: 'River',
    lastName: 'Song',
    balance: 1200
  },
  
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Accounts', accounts)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Accounts', null, {})
  }
};
