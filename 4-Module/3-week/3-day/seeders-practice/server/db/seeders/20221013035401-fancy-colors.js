"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Colors",
			[
				{
					name: "Teal",
					createdAt: new Date(1, 1, 2021),
					updatedAt: new Date(12, 11, 2011),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Colors", null, {});
	},
};
