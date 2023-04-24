'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    static associate(models) {
      // define association here
      Dog.belongsTo( models.User );
    }
  }
  Dog.init({
    name: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};