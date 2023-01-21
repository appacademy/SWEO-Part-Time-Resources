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
      name: 'chartreuse', 
      createdAt: new Date('13 Dec 1991 17:21:00 EST'),
      updatedAt: new Date('13 Dec 1991 17:21:00 EST') 
    }, {
      name: 'mauve', 
      createdAt: new Date('13 Dec 1991 17:21:00 EST'),
      updatedAt: new Date('13 Dec 1991 17:21:00 EST') 
    }, {
      name: 'ochre', 
      createdAt: new Date('13 Dec 1991 17:21:00 EST'),
      updatedAt: new Date('13 Dec 1991 17:21:00 EST') 
    }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Colors', {name: ['chartreuse', 'mauve', 'ochre']});
  }
};
