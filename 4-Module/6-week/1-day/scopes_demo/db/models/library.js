'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  Library.hasMany(
		models.Book,
		{
			foreignKey : "libraryId",
			onDelete: "CASCADE",
			hooks: true
		}
	  )
    }
  }
  Library.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Library',
  });
  return Library;
};
