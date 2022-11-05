'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.hasMany(models.Album, {
        foreignKey: 'artistId',
        as: 'albums'
      });
    }

    static async findById(id) {
      const { Album } = sequelize.models;

      return await Artist.findByPk(id, {
        include: {
          model: Album,
          as: 'albums'
        }
      })
    }
  };
  Artist.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artistId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};