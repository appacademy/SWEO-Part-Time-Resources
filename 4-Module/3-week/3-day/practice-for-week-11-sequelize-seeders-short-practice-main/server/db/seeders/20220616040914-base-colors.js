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
    await queryInterface.bulkInsert('Colors', [
      {
        id: 1, 
        name: 'green',
      },
      {
        id : 2,
        name: 'blue',
      },
      {
        id : 3,
        name: 'yellow',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Colors', {
      name : ['green', 'blue', 'yellow']
    }, {});
  }
};
