'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {

    getImageable(options){
      switch(this.imageableType){
        case 'BlogPost':
          return this.getBlogPost(options)
        case 'UserProfile':
          return this.getUserProfile(options)
        default:
          return Promise.resolve(null)
      }
    }



    static associate(models) {
      // define association here
      Image.belongsTo(models.UserProfile, {
        foreignKey: 'imageableId',
        constraints: false
      })
      Image.belongsTo(models.BlogPost, {
        foreignKey: 'imageableId',
        constraints: false
      })
    }
  };
  Image.init({
    url: {
      type:DataTypes.STRING,
      allowNull: false
    },
    imageableType: DataTypes.ENUM('BlogPost', 'UserProfile'),
    imageableId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};