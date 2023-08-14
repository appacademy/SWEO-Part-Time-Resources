'use strict';

const uppercaseFirst = str => `${str[0].toUpperCase()}${str.substr(1)}`;

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {


        static associate(models) {
            Comment.belongsTo(Image, { foreignKey: 'commentableId', constraints: false });
            Comment.belongsTo(Video, { foreignKey: 'commentableId', constraints: false });
        }

        getCommentable(options) {
          if (!this.commentableType) return Promise.resolve(null);
          const mixinMethodName = `get${uppercaseFirst(this.commentableType)}`;
          return this[mixinMethodName](options);
        }
  }

  Comment.init({
    title: DataTypes.STRING,
    commentableId: DataTypes.INTEGER,
    commentableType: DataTypes.STRING
  }, { sequelize, modelName: 'Comment' });
  return Comment;
};

Comment.addHook("afterFind", findResult => {
    if (!Array.isArray(findResult)) findResult = [findResult];
    for (const instance of findResult) {
      if (instance.commentableType === "image" && instance.image !== undefined) {
        instance.commentable = instance.image;
      } else if (instance.commentableType === "video" && instance.video !== undefined) {
        instance.commentable = instance.video;
      }
      // To prevent mistakes:
      delete instance.image;
      delete instance.dataValues.image;
      delete instance.video;
      delete instance.dataValues.video;
    }
  });

  