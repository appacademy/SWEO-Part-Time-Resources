'use strict';
const {
  Model,
  Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  Book.belongsTo(
		models.Library,
		{
			foreignKey: "libraryId"
		}
	  )
    }
  }

  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    isCheckedOut: DataTypes.BOOLEAN,
    location: DataTypes.STRING,
    libraryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',

	// triggers with all of our mixins/auto generated functions
	// such as get, create, set, destroy, findAll()
	defaultScope: {
		attributes: ['author', 'title', 'location', 'isCheckedOut']
	},

	// used on queries that are commonly used
	scopes : {
		isCheckedOut : {
			where : {
				isCheckedOut: true
			}
		},

		isAtLibrary(libraryName){
			// return options object
			return {
				where: {
					location: {
						[Op.like] : `%${libraryName}%`
					}
				}
			}
		},

		includeLibrary(){
			const {Library} = require('../models')

			return {
				include: Library
			}
		}
	}

  });


  return Book;
};
