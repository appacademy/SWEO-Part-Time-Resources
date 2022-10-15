'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Games', [
      {name: 'Root', numPlayers: 4, estPlayTime: 90},
      {name: 'Scythe', numPlayers: 5, estPlayTime: 115},
      {name: 'The Resistance', numPlayers: 10, estPlayTime: 30}
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Games', {
      name: ['Root', 'Scythe', 'The Resistance']
    })
  }
};