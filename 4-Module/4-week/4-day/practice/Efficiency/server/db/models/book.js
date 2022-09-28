'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {

      Book.belongsTo(
        models.Author, 
      );

      Book.belongsToMany(
        models.Reviewer,
        {
          through: models.Review
        }
      );

      Book.hasMany(
        models.Review, 
      );
      
    }
  };
  Book.init({
    authorId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
