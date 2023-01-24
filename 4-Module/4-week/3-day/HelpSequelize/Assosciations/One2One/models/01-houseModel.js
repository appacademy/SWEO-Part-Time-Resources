"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    static associate(models) {
      House.hasOne(models.Family, {
        foreignKey: "houseId",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  House.init(
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "House",
    }
  );
  return House;
};
