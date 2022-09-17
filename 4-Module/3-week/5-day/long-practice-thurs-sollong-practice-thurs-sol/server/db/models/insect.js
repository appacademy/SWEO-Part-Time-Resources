'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name: {
      type: DataTypes.STRING,
      // Phase 3 - Validations
      allowNull: false,
      unique: true,
      validate: {
        titleCased(value) {
          const words = value.split(' ');
          for (let word of words) {
            if (word[0] !== word[0].toUpperCase()) {
              throw new Error('Must be title cased');
            }
          }
        }
      }
    },
    description: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING,
      // Phase 3 - Validations
      validate: {
        len: [0, 240]
      }
    },
    territory: DataTypes.STRING,
    millimeters: {
      type: DataTypes.FLOAT,
      // Phase 3 - Validations
      allowNull: false,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};