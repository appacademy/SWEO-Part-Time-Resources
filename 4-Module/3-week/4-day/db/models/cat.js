'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cat extends Model {
    // Helper methods for defining associations
    static associate(models) {
      // define association here
    }
  }
  Cat.init({
    name: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Cat',
  });
  return Cat;
};