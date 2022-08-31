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

app.use(express.json());

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

app.get("/artists", (req,res)=>{
  // we don't need anything currently from the req object, we can move on to cooking our response
  const allArtists = getAllArtists();
  res.json(allArtists);
})

app.post("/artists", (req,res)=>{
  const reqBodyData = req.body;
  console.log("reqBodyData:", reqBodyData);
  const artistCreated = addArtist(reqBodyData);
  res.set("Content-Type", "application/json")
  res.send(artistCreated);
})

app.get("/artists/:artistId", (req,res)=>{
  // do we need anything from req object?
  console.log("req-params:", req.params);
  const artistId = req.params.artistId
  const singleArtist = getArtistByArtistId(artistId);
  res.json(singleArtist);
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));