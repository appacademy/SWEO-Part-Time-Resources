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
app.use(express.json())
// Your code here
app.use((req, res, next) => {
  console.log("This is the Req body : ", req.body)
  next()
})

app.get('/artists', (req, res) => {
  res.status(200)
  // let artists = getAllArtists()
  // line 37 doing the same thing as 38-40
  res.json(getAllArtists())
  // res.contentType = 'application/json'
  // let response = JSON.stringify(getAllArtists())
  // res.send(response)
})

app.post('/artists', (req, res) => {
  let newArtist = addArtist(req.body)
  res.status(201)
  res.json(newArtist)
})


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));