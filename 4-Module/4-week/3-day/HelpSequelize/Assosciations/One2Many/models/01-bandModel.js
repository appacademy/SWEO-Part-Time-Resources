"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate(models) {
      Band.hasMany(models.Musician, {
        foreignKey: "bandId",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Band.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Band",
    }
  );
  return Band;
};
