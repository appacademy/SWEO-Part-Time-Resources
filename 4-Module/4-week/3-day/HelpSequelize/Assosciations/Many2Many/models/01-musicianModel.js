"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Musician extends Model {
    static associate(models) {
      Musician.belongsToMany(models.Instrument, {
        through: models.MusicianInstrument,
      });
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
