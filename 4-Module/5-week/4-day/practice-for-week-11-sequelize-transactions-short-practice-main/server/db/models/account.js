'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Account.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    balance: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};