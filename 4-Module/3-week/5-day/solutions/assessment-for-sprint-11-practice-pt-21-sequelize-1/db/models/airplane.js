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
      type: DataTypes.STRING, unique: true, allowNull: false, validate: {
        isValid(val) {
          let first = val.slice(0, 2)
          let last = val.slice(2)
          if (first !== first.toUpperCase()) throw Error('error')
          if (!last) throw Error('error')
          for (let char of last) {
            if (isNaN(char)) throw Error('error')
          }
          for (let char of first) {
            if (!isNaN(char)) throw Error('error')
          }
          if (last.length > 4) throw Error('error')
        }
      }
    },
    model: { type: DataTypes.STRING, allowNull: false, validate: { len: [3, 6] } },
    inService: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
    homeBase: { type: DataTypes.STRING, allowNull: false, validate: { len: [3, 3], isAlpha: true } },
    maxNumPassengers: { type: DataTypes.INTEGER, allowNull: false, validate: { max: 853, min: 2 } },
    currentNumPassengers: {
      type: DataTypes.INTEGER, validate: {
        isValid(val) {
          if (val > this.maxNumPassengers) throw Error('error')
        },
        min: 0
      }
    },
    cruisingAltitudeFt: { type: DataTypes.INTEGER, validate: { min: 500, max: 41000 } },
    firstFlightDate: { type: DataTypes.STRING, validate: { isBefore: '2022-01-01', isAfter: '2019-12-31' } }
  }, {
    sequelize,
    modelName: 'Airplane',
    indexes: [{ unique: true, fields: ['homeBase', 'cruisingAltitudeFt'] }]
  });
  return Airplane;
};