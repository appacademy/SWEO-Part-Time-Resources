'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {

    static associate(models) {

      Review.belongsTo(
        models.Reviewer
      );

      Review.belongsTo(
        models.Book
      );
      
    }
  };
  Review.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    bookId: DataTypes.INTEGER,
    reviewerId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
