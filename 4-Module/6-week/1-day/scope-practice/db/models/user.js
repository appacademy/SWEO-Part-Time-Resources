'use strict';
var exclude =['password', 'createdAt', 'updatedAt']
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    exclude = {exclude : ['password', 'createdAt', 'updatedAt']}
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
        where :{
          isActive : true
        },
        attributes : {
          exclude : exclude
        }
    },
    scopes :{
      isInactive(){
        // console.log(args)
        return {
          where :{
            isActive : false,
          },
          attributes : {
            exclude : exclude
          }
        }
      },
      isActive(){
        return {
          where :{
            isActive : true,
          },
          attributes : {
            exclude : exclude
          }
        }
      }
    }
  });
  return User;
};