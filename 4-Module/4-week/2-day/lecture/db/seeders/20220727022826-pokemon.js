'use strict';

const { Op } = require('sequelize');

const { Trainer, Pokemon } = require('../models')

const pokemons = require('../../data/pokedex.json');

module.exports = {
  async up (queryInterface, Sequelize) {
	// all trainers except joe
	const trainers = await Trainer.findAll({
		where: {
			name: {[Op.notIn]: ['Fisherman Joe']}
		}
	})

	// just gets joe
	const fishermanJoe = await Trainer.findOne({
		where: {
			name: 'Fisherman Joe'
		}
	})

	// iterate through trainers and add random pokemons
	for(let trainer of trainers){

		// 6 random pokemons
		for(let i = 0; i < 6; i++){
			const randomId = Math.floor(Math.random() * 809);
			// nested destructure
			const { name: { english }, type } = pokemons[randomId]
			await Pokemon.create({
				name: english,
				type1: type[0],
				type2: type[1] || null,
				trainerId: trainer.id
			})

		}
	}

	// adding 6 magikarps for fisherman joe
	for(let i = 0; i < 6; i++){
		const { name: { english }, type } = pokemons[128]

		await Pokemon.create({
			name: english,
			type1: type[0],
			type2: type[1] || null,
			trainerId: fishermanJoe.id
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

	const pokemons = await Pokemon.findAll();

	for(let pokemon of pokemons){
		await pokemon.destroy()
	}
  }
};
