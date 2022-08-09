'use strict';

const { Library } = require('../models/')

const libraries = [
	{
		name: "Carson Library",
		location : "151 E Carson St"
	},
	{
		name: "Lomita Library",
		location : "Lomita CA"
	}
]

module.exports = {
  async up (queryInterface, Sequelize) {
	for(const library of libraries ){
		await Library.create(library)
	}
  },

  async down (queryInterface, Sequelize) {
  }
};
