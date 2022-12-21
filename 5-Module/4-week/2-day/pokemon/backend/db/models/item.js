'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsTo(models.Pokemon, {
        foreignKey: "pokemonId",
        as: "pokemon",
      });
    }
  };
  Item.init({
    happiness: DataTypes.INTEGER,
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [0, 255],
      },
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [0, 255]
      },
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    pokemonId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Item',
    defaultScope: {
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
        ]
      }
    },
  });
  return Item;
};