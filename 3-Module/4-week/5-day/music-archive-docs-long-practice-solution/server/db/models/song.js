'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsTo(models.Album, { foreignKey: 'albumId', as: 'album' });
    }

    static async findAllByArtistId(artistId) {
      const { Album, Artist } = sequelize.models;

      return await Song.findAll({
        include: {
          model: Album,
          as: 'album',
          where: {
            artistId
          },
          attributes: []
        }
      });
    }

    static async findAllByAlbumId(albumId) {
      const { Album } = sequelize.models;

      return await Song.findAll({
        where: {
          albumId
        }
      });
    }

    static async findAllByTrackNumber(trackNumber) {
      return await Song.findAll({
        where: {
          trackNumber
        }
      });
    }

    static async findById(id) {
      const { Artist, Album } = sequelize.models;

      const song = await Song.findByPk(id, {
        include: {
          model: Album,
          as: 'album',
          include: {
            model: Artist,
            as: 'artist'
          }
        }
      });
      
      const { name, lyrics, trackNumber, songId, albumId } = song;
      const data = {
        name: song.name,
        lyrics: song.lyrics,
        trackNumber: song.trackNumber,
        songId: song.songId,
        albumId: song.albumId
      }

      data.album = {
        name: song.album.name,
        albumId: song.album.albumId,
        artistId: song.album.artistId
      };

      data.artist = {
        name: song.album.artist.name,
        artistId: song.album.artist.artistId
      }

      return data;
    }
  };
  Song.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lyrics: DataTypes.STRING,
    trackNumber: DataTypes.INTEGER,
    songId: {
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
    modelName: 'Song',
  });
  return Song;
};