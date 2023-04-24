'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preference extends Model {
    static associate(models) {
      // define association here
      // Preference.belongsTo(
      //   models.User
      // );
    }
  }
  Preference.init({
    user_id: {
      type: DataTypes.INTEGER,
    },
    language: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Preference',
  });
  return Preference;
};