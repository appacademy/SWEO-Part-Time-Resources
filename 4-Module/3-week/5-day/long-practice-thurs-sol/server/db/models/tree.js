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
  };
  Tree.init({
    tree: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    location: DataTypes.STRING,
    heightFt: {
      type: DataTypes.FLOAT,
      validate: {
        minValueZero: minValueZero
      }
    },
    groundCircumferenceFt: {
      type: DataTypes.FLOAT,
      validate: {
        minValueZero: minValueZero
      }
    }
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};



function minValueZero(value) {
  if (value < 0) {
    throw new Error("Min value is not at least 0")
  }

}