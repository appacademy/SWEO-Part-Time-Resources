'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Instrument.belongsTo(models.Store)
    }
  }
  Instrument.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    storeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Instrument',
    //!!START SILENT
    // This is a default scope
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    },
    scopes: {
      // These are named scopes
      keyboard: {
        where: { type: 'keyboard' }
      },
      string: {
        where: { type: 'string' }
      },
      woodWind: {
        where: { type: 'woodwind' }
      },
      // This is a named function scope
      atStore(storeId) {
        const { Store } = require('../models');
        return {
          where: {
            storeId
          },
          include: [
            { model: Store }
          ]
        }
      },
      // This is a named function scope
      type(type) {
        return {
          where: {
            type
          }
        }
      }
    },
    //!!END
  });
  return Instrument;
};
