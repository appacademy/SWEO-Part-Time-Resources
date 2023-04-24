'use strict';

const {User, Dog} = require('../models');

const userDogs = [
  {
    userName : 'John',
    dogs: [
      {name: 'Husky'},
      {name: 'Beebo'}
    ]
  },
  {
    userName : 'Toby',
    dogs: [
      {name: 'Duchess'}
    ]
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    for (let userId = 0; userId < userDogs.length; userId++) {
      const {userName, dogs} = userDogs[userId];
      const user = await User.create({name: userName});
      for (let dog = 0; dog < dogs.length; dog++) {
        user.createDog({name: dogs[dog].name});
      }
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
