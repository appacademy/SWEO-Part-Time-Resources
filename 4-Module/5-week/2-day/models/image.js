'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        static associate(models) {
            Image.hasMany(Comment, {
                foreignKey: 'commentableId',
                constraints: false,
                scope: {
                  commentableType: 'image'
                }
              });
        }
    };
    Image.init({
      title: DataTypes.STRING,
      url: DataTypes.STRING
    }, { sequelize, modelName: 'image' });
    return Image;
}