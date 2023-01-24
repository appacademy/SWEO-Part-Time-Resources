"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MusicianInstrument extends Model {
    static associate(models) {}
  }
  MusicianInstrument.init(
    {
      musicianId: DataTypes.INTEGER,
      instrumentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MusicianInstrument",
    }
  );
  return MusicianInstrument;
};
