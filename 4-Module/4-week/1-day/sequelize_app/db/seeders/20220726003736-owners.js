'use strict';

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
	 await queryInterface.bulkInsert('Owners', [{
		name: 'Alex Betita',
		email: 'alexbetita@gmail.com',
		phoneNumber: 12345678
     },
	 {
		name: 'Tristan Huckabee',
		email: 'tristanhuckabee@aol.com',
		phoneNumber: 8675309
	}
	], {});
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
