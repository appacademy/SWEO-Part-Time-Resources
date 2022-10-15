'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Airplanes", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		flightNumber: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false,
		},
		model: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		inService: {
			type: Sequelize.BOOLEAN,
			defaultValue: true,
			allowNull: false,
		},
		homeBase: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		maxNumPassengers: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		currentNumPassengers: {
			type: Sequelize.INTEGER,
		},
		cruisingAltitudeFt: {
			type: Sequelize.INTEGER,
			unique: true,
		},
		firstFlightDate: {
			type: Sequelize.DATE,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
	});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  }
};