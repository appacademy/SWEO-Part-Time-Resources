'use strict';

const { Owner, Dog } = require('../models');

const dogOwners = [
  {
    fullName: 'Greg',
    dogs: [
      {name: 'Pikachu'},
      {name: 'Latios'}
    ]
  },
  {
    fullName: 'Jeff',
    dogs: [
      {name: 'Dusclops'},
      {name: 'Maxey'}
    ]
  }
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i < dogOwners.length; i++) {
      const {fullName, dogs} = dogOwners[i];
      let owner = await Owner.findOne({
        name: [fullName]
      });
      for (let j = 0; j < dogs.length; j++) {
        await owner.createDog(dogs[j]);
      }
    }
  },

  async down (queryInterface, Sequelize) {
    for (let i = 0; i < dogOwners.length; i++) {
      const {fullName, dogs} = dogOwners[i];
      let owner = await Owner.findOne({
        name: [fullName]
      });
      for (let j = 0; j < dogs.length; j++) {
        await Dog.destroy({
          where: {
            ...dogs[j],
            ownerId: owner.id
          }
        });
      }
    }
  }
};
