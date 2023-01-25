"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Musician extends Model {
    static associate(models) {
      Musician.belongsTo(models.Band, { foreignKey: "bandId" });
    }
  }
  Musician.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      bandId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Musician",
    }
  );
  return Musician;
};
