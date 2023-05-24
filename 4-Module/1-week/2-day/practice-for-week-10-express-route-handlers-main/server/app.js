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
app.use(express.json());

app.get("/artists", (req, res) => {
	res.send(getAllArtists());
});

app.post('/artists', (req, res) => {

	// const data = req.body

	res.status(201)
	res.setHeader('Content-Type', 'application/json')
	res.send(addArtist(req.body))
})

app.get('/artists/latest', (req, res)=>{
	res.send(getLatestArtist())
})

app.get('/artists/latest/albums', (req, res)=>{
	res.send(getAlbumsForLatestArtist())
})

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
