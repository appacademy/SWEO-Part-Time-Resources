'use strict';

const { Pokemon, Trainer } = require('../models')
const pokedex = require('../../data/pokedex.json');
const trainer = require('../models/trainer');

module.exports = {
  async up (queryInterface, Sequelize) {

	const trainers = await Trainer.findAll();

	for(let i = 0; i < trainers.length; i++){

		for(let k = 0; k < 6; k++){
			const rando = Math.floor(Math.random() * pokedex.length)
			const { name: { english }, type } = pokedex[rando]
			await Pokemon.create({
				name: english,
				type1: type[0],
				// type2: type?.[1] === 'undefined' ? type[1] : null,\
				type2: type[1] || null,
				trainerId: trainers[i].id
			})
		}
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
