'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
       try {
       /**
        * Add seed commands here.
        *
        * Example:
        * await queryInterface.bulkInsert('People', [{
        *   name: 'John Doe',
        *   isBetaMember: false
        * }], {});
       */
      await queryInterface.bulkInsert('Users', [
        {
          userName: 'John Doe',
          password: 'password',
          isActive: true
        },
        {
          userName: 'Baylen Doss',
          password: 'password',
          isActive: true
        },
        {
          userName: 'James Thompson',
          password: 'password',
          isActive: false
        },
        {
          userName: 'Zaviar Brown',
          password: 'password',
          isActive: false
        }
      ], {});

   }
   catch(e) {
    console.log(e)
   }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
