// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

//!!START
// PHASE 1
app.use(express.json());

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

// PHASE 2
app.get('/artists', (req, res) => {
  res.json(getAllArtists());
});

app.get('/artists/latest', (req, res) => {
  res.json(getLatestArtist());
});

app.get('/artists/:artistId', (req, res) => {
  res.json(getArtistByArtistId(req.params.artistId));
});

app.post('/artists', (req, res) => {
  res.status(201);
  res.json(addArtist(req.body));
});

app.put('/artists/:artistId', (req, res) => {
  res.json(editArtistByArtistId(req.params.artistId, req.body));
});

app.patch('/artists/:artistId', (req, res) => {
  res.json(editArtistByArtistId(req.params.artistId, req.body));
});

app.delete('/artists/:artistId', (req, res) => {
  deleteArtistByArtistId(req.params.artistId);
  res.json({ message: 'Successfully deleted' });
});

app.get('/artists/latest/albums', (req, res) => {
  res.json(getAlbumsForLatestArtist());
});

app.get('/artists/:artistId/albums', (req, res) => {
  res.json(getAlbumsByArtistId(req.params.artistId));
});

app.get('/albums/:albumId', (req, res) => {
  res.json(getAlbumByAlbumId(req.params.albumId));
});

app.post('/artists/:artistId/albums', (req, res) => {
  res.status(201);
  res.json(addAlbumByArtistId(req.params.artistId, req.body));
});

app.put('/albums/:albumId', (req, res) => {
  res.json(editAlbumByAlbumId(req.params.albumId, req.body));
});

app.patch('/albums/:albumId', (req, res) => {
  res.json(editAlbumByAlbumId(req.params.albumId, req.body));
});

app.delete('/albums/:albumId', (req, res) => {
  deleteAlbumByAlbumId(req.params.albumId)
  res.json({ message: 'Successfully deleted' });
});

app.get('/albums', (req, res) => {
  res.json(getFilteredAlbums(req.query.startsWith));
});

app.get('/artists/:artistId/songs', (req, res) => {
  res.json(getSongsByArtistId(req.params.artistId));
});

app.get('/albums/:albumId/songs', (req, res) => {
  res.json(getSongsByAlbumId(req.params.albumId));
});

app.get('/songs/:songId', (req, res) => {
  res.json(getSongBySongId(req.params.songId));
});

app.post('/albums/:albumId/songs', (req, res) => {
  res.status(201);
  res.json(addSongByAlbumId(req.params.albumId, req.body));
});

app.put('/songs/:songId', (req, res) => {
  res.json(editSongBySongId(req.params.songId, req.body));
});

app.patch('/songs/:songId', (req, res) => {
  res.json(editSongBySongId(req.params.songId, req.body));
});

app.delete('/songs/:songId', (req, res) => {
  deleteSongBySongId(req.params.songId)
  res.json({ message: 'Successfully deleted' });
});
//!!END

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
