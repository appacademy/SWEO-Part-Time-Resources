'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puppy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Puppy.init({
    name: DataTypes.STRING,
    age_yrs: DataTypes.FLOAT,
    breed: DataTypes.STRING,
    weight_lbs: DataTypes.INTEGER,
    microchipped: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Puppy',
  });
  return Puppy;
};