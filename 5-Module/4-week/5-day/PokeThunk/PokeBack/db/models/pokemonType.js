const types = [
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel",
];

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("__types__", {});
};

module.exports.types = types;