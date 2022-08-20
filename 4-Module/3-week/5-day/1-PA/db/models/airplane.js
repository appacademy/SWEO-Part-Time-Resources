'use strict';
const { Model } = require('sequelize');
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
          firstTwoLetters(val) {
            if (Number(val[0]) || Number(val[1])) {
              throw new Error('First two characters cannot be a number');
            }
          },
          firstTwoCap(val) {
            const firstTwoCharacters = val.slice(0, 2);

            if (firstTwoCharacters.toUpperCase() !== firstTwoCharacters) {
              throw new Error('First two letters should be capitalized');
            }
          },
          restOnlyNums(val) {
            const everythingPastIndex1 = val.slice(2);
            if (isNaN(Number(everythingPastIndex1))) {
              throw new Error('All characters past index 1 must be numbers');
            }
            // if (isNaN(Number(val.slice(2)))) throw new Error('bad');
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
        allowNull: false,
        defaultValue: true,
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
          min: 2,
          max: 853,
        },
      },
      currentNumPassengers: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 853,
          overCapacity(val) {
            if (val > this.maxNumPassengers) throw new Error('too many peeps!');
          },
        },
      },
      cruisingAltitudeFt: {
        type: DataTypes.INTEGER,
        validate: {
          min: 500,
          max: 41000,
        },
      },
      firstFlightDate: {
        type: DataTypes.STRING,
        validate: {
          isDate: true,
          isAfter: '2019-12-31',
          isBefore: '2022-01-01',
        },
      },
    },
    {
      sequelize,
      modelName: 'Airplane',
      indexes: [
        {
          unique: true,
          fields: ['homeBase', 'cruisingAltitudeFt'],
        },
      ],
    }
  );
  return Airplane;
};
