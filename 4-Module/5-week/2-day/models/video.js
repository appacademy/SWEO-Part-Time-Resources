'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    class Video extends Model {
        static associate(models) {
            Video.hasMany(Comment, {
                foreignKey: 'commentableId',
                constraints: false,
                scope: {
                  commentableType: 'video'
                }
              }); 
        }
    }
    Video.init({
      title: DataTypes.STRING,
      text: DataTypes.STRING
    }, { sequelize, modelName: 'video' });
    return Video;
};


