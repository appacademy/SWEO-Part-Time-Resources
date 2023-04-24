'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookUser extends Model {
    static associate(models) {
      // define association here
    }
  }
  BookUser.init({
    user_id: {
      type: DataTypes.INTEGER,
    },
    book_id: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'BookUser',
  });
  return BookUser;
};