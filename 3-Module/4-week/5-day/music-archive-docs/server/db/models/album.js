'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate(models) {
      // define association here
      Album.belongsTo(models.Artist, { foreignKey: 'artistId', as: 'artist' });
      Album.hasMany(models.Song, {
        foreignKey: 'albumId',
        as: 'songs'
      });
    }

    static async findAllByArtistId(artistId) {
      const { Artist } = sequelize.models;

      return await Album.findAll({
        where: {
          artistId
        }
      });
    }

    static async findById(id) {
      const { Artist, Song } = sequelize.models;

      return await Album.findByPk(id, {
        include: [
          {
            model: Artist,
            as: 'artist'
          }, {
            model: Song,
            as: 'songs',
            attributes: {
              include: ['name']
            },
          }
        ]
      });
    }
  };
  Album.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    albumId: {
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
    modelName: 'Album',
  });
  return Album;
};