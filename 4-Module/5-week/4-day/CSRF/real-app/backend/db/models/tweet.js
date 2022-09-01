'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tweet.belongsTo(models.User, { foreignKey: 'authorId' });
    }
  }
  Tweet.init({
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [1, 280]
      }
    },
    authorId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Tweet',
  });
  return Tweet;
};