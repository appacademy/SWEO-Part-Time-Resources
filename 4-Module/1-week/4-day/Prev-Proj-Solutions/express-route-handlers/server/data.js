const artists = require('./seeds/artists.json');
const albums = require('./seeds/albums.json');
const songs = require('./seeds/songs.json');

let nextArtistId = 2;
function newArtistId() {
  const newId = nextArtistId;
  nextArtistId++;
  return newId;
}

let nextAlbumId = 2;
function newAlbumId() {
  const newId = nextAlbumId;
  nextAlbumId++;
  return newId;
}

let nextSongId = 2;
function newSongId() {
  const newId = nextSongId;
  nextSongId++;
  return newId;
}

exports.getAllArtists = () => {
  return Object.values(artists);
};

exports.getLatestArtist = () => {
  const artistsArr = Object.values(artists);
  const latest = artistsArr[artistsArr.length - 1];
  return {
    latest
  };
};

exports.getArtistByArtistId = (artistId) => {
  const artist = { ...artists[artistId] };
  artist.albums = Object.values(albums)
    .filter(album => album.artistId == artist.artistId);
  return artist;
};

exports.addArtist = (data) => {
  const artistId = newArtistId();
  data.artistId = artistId;
  artists[artistId] = data;
  return artists[artistId];
};

exports.editArtistByArtistId = (artistId, data) => {
  artists[artistId] = {
    ...artists[artistId],
    ...data
  };
  return artists[artistId];
};

exports.deleteArtistByArtistId = (artistId) => {
  delete artists[artistId];
  const artistAlbums = Object.values(albums)
    .filter(album => album.artistId == artistId);
  artistAlbums
    .forEach(album => delete albums[album.albumId]);
  const artistAlbumIds = artistAlbums.map(album => album.albumId);
  Object.values(songs)
    .forEach(song => {
      if (artistAlbumIds.includes(song.albumId)) {
        delete songs[song.songId];
      }
    });
  return artists[artistId];
};

exports.getAlbumsForLatestArtist = () => {
  const artistsArr = Object.values(artists);
  const latestArtist = artistsArr[artistsArr.length - 1];
  const artistAlbums = Object.values(albums)
    .filter(album => album.artistId == latestArtist.artistId);
  return {
    latest: {
      albums: artistAlbums
    },
  };
};

exports.getAlbumsByArtistId = (artistId) => {
  return Object.values(albums)
    .filter(album => album.artistId == artistId);
};

exports.getAlbumByAlbumId = (albumId) => {
  const album = { ...albums[albumId] };
  album.artist = artists[album.artistId];
  album.songs = Object.values(songs)
    .filter(song => song.albumId == albumId);
  return album;
};

exports.addAlbumByArtistId = (artistId, data) => {
  const albumId = newAlbumId();
  albums[albumId] = {
    albumId,
    ...data,
    artistId
  };
  return albums[albumId];
};

exports.editAlbumByAlbumId = (albumId, data) => {
  albums[albumId] = {
    ...albums[albumId],
    ...data
  };
  return albums[albumId];
};

exports.deleteAlbumByAlbumId = (albumId) => {
  delete albums[albumId];
  Object.values(songs)
    .forEach(song => {
      if (song.albumId == albumId) {
        delete songs[song.songId];
      }
    });
  return albums[albumId];
};

exports.getFilteredAlbums = (startsWith) => {
  if (!startsWith) return ({
    error: "Filtered albums requires a starting letter"
  });

  return Object.values(albums)
    .filter(album => album.name.startsWith(startsWith));
};

exports.getSongsByArtistId = (artistId) => {
  const artistAlbumIds = Object.values(albums)
    .filter(album => album.artistId == artistId)
    .map(album => album.albumId);
  return Object.values(songs)
    .filter(song => artistAlbumIds.includes(song.albumId))
    .map(song => ({
      songId: song.songId,
      name: song.name,
      albumId: song.albumId
    }));
};

exports.getSongsByAlbumId = (albumId) => {
  return Object.values(songs)
    .filter(song => song.albumId == albumId)
    .map(song => ({
      songId: song.songId,
      name: song.name,
      albumId: song.albumId
    }));
};

exports.getSongBySongId = (songId) => {
  const song = { ...songs[songId] };
  song.album = Object.values(albums)
    .find(album => album.albumId == song.albumId);
  song.artist = artists[song.album.artistId];
  return song;
};

exports.addSongByAlbumId = (albumId, data) => {
  const songId = newSongId();
  songs[songId] = {
    songId,
    ...data,
    albumId
  };
  return songs[songId];
};

exports.editSongBySongId = (songId, data) => {
  songs[songId] = {
    ...songs[songId],
    ...data
  };
  return songs[songId];
};

exports.deleteSongBySongId = (songId) => {
  delete songs[songId];
  return songs[songId];
};
