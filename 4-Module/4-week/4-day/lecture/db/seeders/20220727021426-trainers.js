'use strict';

const { Trainer } = require('../models');

const trainer = require('../../data/trainers.json');


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
	for(let i = 0; i < trainer.length; i++){
		await Trainer.create({
			name: trainer[i].name,
			money: trainer[i].money
		})
	}

	// for(let i = 0; i < trainer.length; i++){
	// 	const {name, money} = trainer[i]
	// 	await Trainer.create({
	// 		name,
	// 		money
	// 	})
	// }

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
