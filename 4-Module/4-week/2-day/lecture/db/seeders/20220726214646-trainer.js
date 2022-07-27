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

	await queryInterface.bulkInsert('Trainers', [
		{
			name: 'RED',
			money: 2000000000
		},
		{
			name: 'BLUE',
			money: 300000000
		},
		{
			name: 'BROCK',
			money: 1400003
		},
		{
			name: 'MISTY',
			money: 60000000
		},
		{
			name: 'JESSIE',
			money: 0
		},
		{
			name: 'JAMES',
			money: 0
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
