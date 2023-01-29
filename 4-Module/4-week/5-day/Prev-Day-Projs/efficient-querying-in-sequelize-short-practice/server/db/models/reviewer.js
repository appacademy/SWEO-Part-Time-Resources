'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviewer extends Model {

    static associate(models) {

      Reviewer.hasMany(
        models.Review, 
      );

    }
  };
  Reviewer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reviewer',
  });
  return Reviewer;
};
