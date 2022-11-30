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

// Your code here
app.use(express.json())

app.use((req, res, next) => {
  console.log('Body:', req.body)
  next()
})

app.get('/artists', (req, res) => {
  res.json(getAllArtists())
})

app.post('/artists', (req, res) => {
  res.status(201).json(addArtist(req.body))
})

app.get('/artists/:artistId', (req, res) => {
  res.json(getArtistByArtistId(req.params.artistId))
})

app.put('/artists/:artistId', (req, res) => {
  res.json(editArtistByArtistId(req.params.artistId, req.body))
})

app.delete('/artists/:artistId', (req, res) => {
  deleteArtistByArtistId(req.params.artistId)
  res.json({message: 'successfully deleted'})
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));