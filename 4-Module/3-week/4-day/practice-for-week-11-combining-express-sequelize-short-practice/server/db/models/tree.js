'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tree.init({
    species: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: true,
        isLowercase: true,
        len: [4, 30],

        speciesCheck(value){
          if(value[0] !== 'W'){
            throw new Error('Can only create tree species starting with the letter "W"')
          }
        }        
      }
    },
    location: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      validate: {
        max: 300,
        min: 1
      }
    }
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};