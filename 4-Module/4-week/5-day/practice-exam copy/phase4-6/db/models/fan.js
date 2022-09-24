'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fan.belongsToMany(models.Player, {
        through: models.DraftPick,
        // onDelete: 'cascade',
        // hooks: true
      })
    }
  }
  Fan.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Fan',
  });
  return Fan;
};