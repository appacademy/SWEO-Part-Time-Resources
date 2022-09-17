'use strict';
const {
  Model
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
        isUppercase: true,
        len: [3, 6],
        validFlightNum(value) {
          // check if first two chars are valid letters
          const letters = "abcdefghijklmnopqrstuvwxyz";
          const firstChar = value[0].toLowerCase();
          const secondChar = value[1].toLowerCase();

          // if they are not both letters (firstchar and secondChar) then throw error
          if (!(letters.includes(firstChar) && letters.includes(secondChar))) {
            throw new Error("first two are not letters");
          }

          // if the rest of the characters are not numbers, throw error
          const lastNumbers = value.slice(2)
          for (let i = 0; i < lastNumbers.length; i++) {
            let char = lastNumbers[i];
            // if it is not a number, then throw error
            if (isNaN(char)) {
              throw new Error("last digits are not numbers");
            }
          }
        }
      }
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [3,6]
      }
    },
    inService: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      // our column rejects the data if it's not a boolean, but if we add a record, it will populate all the columns for that record (including this one). So the default value will be "null", but null is not allowed... so we need to change the default value to what? What datatype does this column take in?
      defaultValue: false,
    },
    homeBase: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 3],
        isAlpha: true,
      },
      // unique: true
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
        }
      }
    },
    cruisingAltitudeFt: {
      type: DataTypes.INTEGER,
      // unique: true,
      validate: {
        min: 500,
        max: 41000,
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
  });
  return Airplane;
};