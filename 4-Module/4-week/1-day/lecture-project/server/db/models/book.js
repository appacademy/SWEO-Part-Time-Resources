'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsToMany(
        models.Reader,
        {
          through: models.BookReader,
          foreignKey: 'bookId', //the foreign key that references this model
          otherKey: 'readerId'  //the foreign key that references the model you want to associate to
        }
      )
    }
  };
  Book.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};