'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      where: {
        isActive: true
      },
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      isInactive() {
        return {
          where: {
            isActive: false,
          }, attributes: {
            exclude: ['password', 'createdAt', 'updatedAt']
          }
        }
      },
      isActive() {
        return {
          where: {
            isActive: false,
          }, attributes: {
            exclude: ['password', 'createdAt', 'updatedAt']
          }
        }
      },

    }
  });
  return User;
};