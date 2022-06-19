'use strict';
const {
  Model,
  Validator // validator.js node module
} = require('sequelize');
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
  Airplane.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 6],
        isAlphanumeric: true, // not really necessary
        hasTwoCharsAndOneToThreeNumbers(value) {
          const chars = value.split('');
          const firstTwo = chars.slice(0, 2);
          const lastChars = chars.slice(2);
          for (let char of firstTwo) {
            if (char.toUpperCase() === char.toLowerCase()) {
              throw new Error('First two characters must be alphabet letters');
            }
            if (char.toUpperCase() !== char) {
              throw new Error('First two characters must be uppercase');
            }
          }
          for (let char of lastChars) {
            if (isNaN(char)) {
              throw new Error('All characters after the first two should be numbers');
            }
          }
        },
        // second option:
        // hasTwoCharsAndOneToThreeNumbers(value) {
        //   const firstTwo = value.slice(0, 2);
        //   const lastChars = value.slice(2);
        //   if (!Validator.isAlpha(firstTwo)) {
        //     throw new Error('First two characters must be alphabet letters');
        //   }
        //   if (!Validator.isUppercase(firstTwo)) {
        //     throw new Error('First two characters must be uppercase');
        //   }
        //   if (!Validator.isNumeric(lastChars)) {
        //     throw new Error('All characters after the first two should be numbers');
        //   }
        // }
      }
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 6]
      }
    },
    inService: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    homeBase: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 3],
        isAlpha: true,
      }
    },
    maxNumPassengers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 2,
        max: 853,
      }
    },
    currentNumPassengers: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 853,
        isNotGreaterThanMaxNumPassengers(value) {
          if (value > this.maxNumPassengers) {
            throw new Error('Cannot be greater than maxNumPassengers');
          }
        },
        hasNoCurrentPassengersWhenNotInService(value) {
          if (!this.inService && value !== null) {
            // value !== null is redundant since value will always be null if
              // this validation runs
            throw new Error('currentNumPassengers must be null if not inService');
          }
        }
      }
    },
    cruisingAltitudeFt: {
      type: DataTypes.INTEGER,
      validate: {
        min: 500,
        max: 41000,
      }
    },
    maxRangeKm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 100,
        max: 18000,
      }
    },
    firstFlightDate: {
      type: DataTypes.DATE,
      validate: {
        isBefore: "2022-01-01",
        isAfter: "2019-12-31",
      }
    },
  }, {
    sequelize,
    modelName: 'Airplane',
    indexes: [
      {
        unique: true,
        fields: ['homeBase', 'cruisingAltitudeFt'],
      }
    ]
  });
  return Airplane;
};