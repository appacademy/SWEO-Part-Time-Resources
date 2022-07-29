'use strict';

const { Pokemon, Move } = require('../models')

module.exports = {
  async up (queryInterface, Sequelize) {
	const magikarps = await Pokemon.findAll({
		where: {
			name: 'Magikarp'
		}
	})

	for(let magikarp of magikarps){
		magikarp.addMove(449)
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
