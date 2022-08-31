'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    // getImageable(options) {
    //   if (this.imageableType === 'UserProfile') {
    // return this.getUserProfile(options);
    //   } else if (this.imageableType === 'BlogPost') {
    // return this.getBlogPost(options);
    //   } else {
    //     return Promise.resolve(null);
    //   }
    // }

    getImageable(options) {
      if (!this.imageableType) return Promise.resolve(null);

      const mixin = `get${this.imageableType}`;

      return this[mixin](options);
    }

    static associate(models) {
      Image.belongsTo(models.UserProfile, {
        foreignKey: 'imageableId',
        constraints: false,
      });
      Image.belongsTo(models.BlogPost, {
        foreignKey: 'imageableId',
        constraints: false,
      });
    }
  }
  Image.init(
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageableType: DataTypes.ENUM('UserProfile', 'BlogPost'),
      imageableId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Image',
    }
  );
  return Image;
};
