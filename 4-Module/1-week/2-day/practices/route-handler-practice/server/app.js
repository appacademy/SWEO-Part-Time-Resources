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

app.use(express.json()); //need to parse the request body to deserialize json data

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

// route for the GET /artists
app.get("/artists", (req, res)=>{
  res.status(200);
  const getArtistsData = getAllArtists();
  res.set("content-type", "text/plain")
  res.send(getArtistsData)

  // res.status(200).json(getAllArtists()); //will work too
})

// route for the POST /artists to create an artist
app.post("/artists", (req,res)=>{
  const reqBodyData = req.body;
  console.log("reqBodyData:", req.body);
  const createdArtist = addArtist(reqBodyData);
  res.status(201);
  res.json(createdArtist);
})


// few bonus
app.get('/artists/latest', (req, res) => {
  res.json(getLatestArtist());
});

app.get('/artists/latest/albums', (req, res) => {
  res.json(getAlbumsForLatestArtist());
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));