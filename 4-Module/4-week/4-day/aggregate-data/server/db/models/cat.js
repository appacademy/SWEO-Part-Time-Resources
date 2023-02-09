'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cat.belongsToMany(
        models.Toy, 
        { through: models.CatToy }
      );
      Cat.hasMany(
        models.CatToy, 
      );
    }
  };
  Cat.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    breed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cat',
  });
  return Cat;
};