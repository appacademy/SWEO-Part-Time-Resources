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
        validate: {
            len: [3,6],
            flightNumberCheck(val){
                let chars = val.split('')
                const firstTwo = chars.slice(0,2)
                const end = chars.slice(2)
                for(let char of firstTwo){
                    if(char.toUpperCase() === char.toLowerCase()){
                        throw new Error('first two characters must be alphebetical')
                    }
                    if(char.toUpperCase() !== char){
                        throw new Error('first two characters must be uppercase')
                    }
                }

                for(let char of end){
                    if(isNaN(char)){
                        throw new Error('ending characters must be numeric')
                    }
                }

            }
        }

    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3,6]
        }
    },
    inService: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    homeBase: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3,3],
            isAlpha: true
        }
    },
    maxNumPassengers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 2,
            max: 853
        }
    },
    currentNumPassengers: {
       type: DataTypes.INTEGER,
       validate: {
        min: 0,
        max: 853,
        currentValidate(val){
            if(val > this.maxNumPassengers){
                throw new Error('cant have more than airplane holds')
            }
            if(!this.inService && val){
                throw new Error('plane in service')
            }
        }
       }
    },
    cruisingAltitudeFt: {
        type: DataTypes.INTEGER,
        validate: {
           min: 500,
           max: 41000
        }
    },
    maxRangeKm: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 100,
            max: 18000
        }
    },
    firstFlightDate: {
        type: DataTypes.DATE,
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
