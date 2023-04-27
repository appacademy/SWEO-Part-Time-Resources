'use strict';

const { Model } = require('sequelize');
const { types } = require("./pokemonType");

const UNKNOWN_IMG_URL = "/images/unknown.png";

module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    static associate(models) {
      Pokemon.hasMany(models.Item, { foreignKey: "pokemonId", as: "items" });
      Pokemon.addScope("withItems", {
        include: [{ model: models.Item, as: "items" }]
      });
    }
  };
  Pokemon.init({
    number: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
      validate: {
        min: 1
      }
    },
    attack: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100
      }
    },
    defense: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100
      }
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING,
      get() {
        const captured = this.getDataValue("captured");
        if (captured) return this.getDataValue("imageUrl");
        return UNKNOWN_IMG_URL;
      }
    },
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 255],
          msg: "must be between 3 and 255 characters"
        }
      }
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM(types),
      values: types
    },
    moves: {
      allowNull: false,
      type: DataTypes.STRING(255),
      get() {
        const rawValue = this.getDataValue('moves');
        return rawValue ? JSON.parse(rawValue) : null;
      },
      set(value) {
        this.setDataValue('moves', JSON.stringify(value));
      }
    },
    encounterRate: {
      type: DataTypes.DECIMAL(3, 2),
      validate: {
        min: 0,
        max: 100
      }
    },
    catchRate: {
      type: DataTypes.DECIMAL(3, 2),
      validate: {
        min: 0,
        max: 100
      }
    },
    captured: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'Pokemon',
    defaultScope: {
      attributes: {
        exclude: [
          "attack",
          "defense",
          "type",
          "moves",
          "encounterRate",
          "catchRate",
          "createdAt",
          "updatedAt"
        ]
      }
    },
    scopes: {
      random: {
        attributes: {
          include: ["encounterRate"]
        }
      },
      detailed: {
        attributes: {
          exclude: [
            "encounterRate",
            "catchRate",
          ]
        }
      },
      ally: {
        where: {
          captured: true 
        }
      },
      opponent: {
        where: {
          captured: false
        }
      }
    }
  });
  return Pokemon;
};