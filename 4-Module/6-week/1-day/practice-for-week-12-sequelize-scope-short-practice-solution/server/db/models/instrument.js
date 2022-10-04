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
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },
    scopes: {
      'keyboard': {
        where: {
          type: 'keyboard'
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      },
      'string': {
        where: {
          type: 'string'
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      },
      'woodwind': {
        where: {
          type: 'woodwind'
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      },
      instrumentType: function(type){
        return {
          where: {
            type: type
          },
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }
      },
      atStore: function(storeId){
        const { Store } = require('../models');
        return {
          where: {
            storeId
          },
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          },
          order: [
            ['name', 'ASC']
          ],
          include: [
            { model: Store }
          ]
        }
      }
    }
  });
  return Instrument;
};
