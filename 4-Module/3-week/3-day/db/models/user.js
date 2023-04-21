'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static classLevelMethod() {
      return 'class level';
    }
    instanceLevelMethod() {
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
      validate: {
        notNull: {
          msg: 'Please Enter a First Name'
        },
        is: /^[a-z]+$/,
        isAlpha: true,
        isCapitalized(value) {
          if (value[0] !== value[0].toUpperCase()) {
            throw new Error('Firstname is not capitalized');
          }
        }
      }
    },
    lastName: DataTypes.STRING
  }, {
    sequelize,
    validate: {
      //whatever custom validation for all columns
    },
    modelName: 'User',
  });
  return User;
};