'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static showClassLevel() {
      return 'class level';
    }
    showInstanceLevel() {
      return 'instance level'
    }
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Please Enter a First Name'
        },
        is: /^[a-z]+$/,
        isAlpha: true,
        isCapitalized(value) {
          if(value[0] !== value[0].toUpperCase()) {
            throw new Error('First name is not Capitalized');
          }
        }
      }
    },
    lastName: DataTypes.STRING
  }, {
    sequelize,
    validate: {
      //validation functions to apply to every column
    },
    modelName: 'User',
  });
  return User;
};