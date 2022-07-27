'use strict';

const { Pokemon, Move } = require('../models')

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
   const pokemon = await Pokemon.findOne({
		where : {
			name: 'Haunter'
		}
   });

   const move = await Move.findAll({
		where: {
			type: 'Ghost'
		}
   });

   pokemon.addMoves(move.slice(14))
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
