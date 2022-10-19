'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MusicianInstruments", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		musicianId: {
			type: Sequelize.INTEGER,
			references: {
				model: "Musicians",
				key: "id",
			},
		},
		instrumentId: {
			type: Sequelize.INTEGER,
			references: {
				model: "Instruments",
				key: "id",
			},
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MusicianInstruments');
  }
};