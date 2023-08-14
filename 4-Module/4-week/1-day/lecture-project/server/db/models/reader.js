'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reader extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reader.belongsTo(
        models.Person,
        {
          through: models.BookReader,
          foreignKey: 'readerId',  //the foreign key that references this model
          otherKey: 'bookId' //the foreign key that references the model you want to associate to
        }
      )
    }
  };
  Reader.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Reader',
  });
  return Reader;
};