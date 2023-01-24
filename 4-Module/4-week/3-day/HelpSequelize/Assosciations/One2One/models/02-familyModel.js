"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Family extends Model {
    static associate(models) {
      Family.belongsTo(models.House, {
        foreignKey: "houseId",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Family.init(
    {
      familyName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Family",
    }
  );
  return Family;
};
