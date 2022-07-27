'use strict';

const { Move } = require('../models');

const moves = require('../../data/moves.json');

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
	for(const move of moves){
		const { ename: name, type, power, accuracy } = move
		await Move.create({
			name,
			type,
			power,
			accuracy
		})
	}
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	const moves = await Move.findAll();

	for(const move of moves){
		await move.destroy()
	}
  }
};
