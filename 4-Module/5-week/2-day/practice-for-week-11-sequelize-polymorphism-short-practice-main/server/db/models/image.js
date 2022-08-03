'use strict';

const uppercaseFirst = str => `${str[0].toUpperCase()}${str.substr(1)}`;

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

	getImageable(options) {
		if (!this.imageableType) return Promise.resolve(null);

		//blogPost.getImageable
		// getBlogPost

		const mixinMethodName = `get${uppercaseFirst(this.imageableType)}`;

		// this.getBlogPost()
		return this[mixinMethodName](options);
	}

    static associate(models) {
      // define association here

	  // blogPost
	  Image.belongsTo(
		models.BlogPost,
		{
			foreignKey: "imageableId",
			constraints: false
		}
	  )

	  // userProfile
	  Image.belongsTo(
		models.UserProfile,
		{
			foreignKey: "imageableId",
			constraints: false
		}
	  )
    }
  };
  Image.init({
    url: {
		type: DataTypes.STRING,
		allowNull: false
	},
    imageableId: DataTypes.INTEGER,
    imageableType: DataTypes.ENUM('BlogPost', 'UserProfile')
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
