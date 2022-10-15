"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Airplane extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Airplane.init(
		{
			flightNumber: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
				validate: {
					len: [3, 6],
					allNumbers(value) {
						if (!isNaN(Number(value))) {
							throw new Error("Cannot be all numbers");
						}
					},
					endsWithLetter(value) {
						const lastLetter = value.slice(-1);
						if (isNaN(Number(lastLetter))) {
							throw new Error("Must be a number for last part");
						}
					},
					checkFirstLetter(value) {
						const firstTwo = value.slice(0, 2);
						const valid = ["UA", "BA", "DL"];
						if (!valid.includes(firstTwo)) {
							throw new Error("Yo can't do that.");
						}
					},
				},
			},
			model: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [3, 6],
				},
			},
			inService: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
				allowNull: false,
			},
			homeBase: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [3, 3],
					isAlpha: true,
				},
			},
			maxNumPassengers: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					max: 853,
					min: 2,
				},
			},
			currentNumPassengers: {
				type: DataTypes.INTEGER,
				validate: {
					min: 0,
					max: 853,
					lessThanMax(value) {
						if (value > this.maxNumPassengers) {
							throw new Error("Cannot be greater than max");
						}
					},
				},
			},
			cruisingAltitudeFt: {
				type: DataTypes.INTEGER,
				unique: true,
				validate: {
					min: 500,
					max: 41000,
				},
			},
			firstFlightDate: {
				type: DataTypes.DATE,
        validate: {
          isAfter: "2019-12-31",
          isBefore: "2022-01-01"
        }
			},
		},
		{
			sequelize,
			indexes: [
				{
					unique: true,
					fields: ["cruisingAltitudeFt", "homeBase"],
				},
			],
			modelName: "Airplane",
		}
	);
	return Airplane;
};
