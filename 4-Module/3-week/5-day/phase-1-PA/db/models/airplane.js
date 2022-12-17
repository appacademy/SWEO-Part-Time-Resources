'use strict';
const {
  Model
} = require('sequelize');
const { cruisingAltitudeFt } = require('../../test/data/airplane-values');
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
      allowNull:false,
        validate: {
          len: [3, 6],
          twoLettersAndNumbers(value){
            const chars = value.split('')
            const firstTwo = chars.slice(0, 2)
            const lastChars = chars.slice(2)
            for(let char of firstTwo){
              if(Number(char)){
                throw new Error('first two chars need to be letter')
              }
              if(char.toUpperCase() !== char){
                throw new Error('first two need to be uppercase')
              }
            }
            for(let char of lastChars){
              if(isNaN(char)){
                throw new Error('everything at the end needs to be numbers')
              }
            }
          }
        }
    },
    model: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 6]
      }
    },
    inService: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    homeBase: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 3],
        isAlpha: true
      }
    },
    maxNumPassengers: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 2,
        max: 853
      }
    },
    currentNumPassengers: {
      type:DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 853,
            isNotMoreThanAllowed(value){
              if(value > this.maxNumPassengers){
                throw new Error('too many peeps not enough seets')
              }
            }
      }
    },
    cruisingAltitudeFt: {
      type:DataTypes.INTEGER,
      validate: {
        min: 401,
        max: 41999
      }
    },
    firstFlightDate: {
      type:DataTypes.DATE,
      validate: {
        isBefore: '2022-01-01',
        isAfter: '2019-12-31'
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
    indexes: [
      {
        unique: true,
        fields: ['homeBase', 'cruisingAltitudeFt']
      }
    ]
  });
  return Airplane;
};