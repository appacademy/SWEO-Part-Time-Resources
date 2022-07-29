'use strict';

const { Move } = require('../models');

const moves = require('../../data/moves.json');

module.exports = {
  async up (queryInterface, Sequelize) {

	for(let i = 0; i < moves.length; i++){

		const { ename, type, power, accuracy } = moves[i]
		await Move.create({
			name: ename,
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
  }
};
