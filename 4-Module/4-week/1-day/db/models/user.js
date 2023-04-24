'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      // User.hasOne(
      //   models.Preference({
      //     foreignKey: 'user_id'
      //   })
      // );
      User.hasMany(
        models.Dog, {
          foreignKey: 'user_id',
          onDelete: 'CASCADE',
          hooks: true
        }
      );
      // User.belongsToMany({
      //   through: models.BookUser
      // });
    }
  }
  User.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};