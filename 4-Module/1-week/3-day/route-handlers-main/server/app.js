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
<<<<<<< HEAD
app.use(express.json())
// Your code here
app.use((req, res, next) => {
  console.log("this is the body : ", req.body)
  next()
})
// get all artists route

app.get('/artists', (req, res) => {
  const results = getAllArtists()
  // status set to 200 by default, but you can use res.status to set any code you want
  res.json(results)
})

app.post('/artists', (req, res) => {
  // some other possible database stuff
  res.status(201)
  res.json(addArtist(req.body))
})
=======

// Your code here
>>>>>>> 2022-Jan-W

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));