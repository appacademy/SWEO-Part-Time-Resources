'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    static associate(models) {
      // define association here
      Owner.hasMany(
        models.Dog, {
          foreignKey: 'ownerId',
          onDelete: 'CASCADE', // all caps in association
          hooks: true
        }
      );
    }
  }
  Owner.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Owner',
  });
  return Owner;
};