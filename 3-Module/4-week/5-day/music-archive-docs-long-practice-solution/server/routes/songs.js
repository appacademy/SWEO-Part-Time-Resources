const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const db = require('../db');

const { NotFoundError, BodyError } = require('../errors');

router.get('/songs/:songId', asyncHandler(async (req, res) => {
  const { songId } = req.params;
  const song = await db.Song.findById(songId);

  if (!song) throw new NotFoundError('Song not found');

  return res.json(song);
}));

router.get('/albums/:albumId/songs', asyncHandler(async (req, res) => {
  const { albumId } = req.params;
  
  const album = await db.Album.findByPk(albumId);
  if (!album) throw new NotFoundError('Album not found');

  const songs = await db.Song.findAllByAlbumId(albumId);

  return res.json(songs);
}));

router.get('/trackNumbers/:trackNumber/songs', asyncHandler(async (req, res) => {
  const { trackNumber } = req.params;

  const songs = await db.Song.findAllByTrackNumber(Number(trackNumber));

  return res.json(songs);
}));

router.get('/artists/:artistId/songs', asyncHandler(async (req, res) => {
  const { artistId } = req.params;

  const artist = await db.Album.findByPk(artistId);
  if (!artist) throw new NotFoundError('Artist not found');

  const songs = await db.Song.findAllByArtistId(artistId);

  return res.json(songs);
}));

router.post('/albums/:albumId/songs', asyncHandler(async (req, res) => {
  const { albumId } = req.params;
  const { name, lyrics, trackNumber } = req.body;

  if (!name) throw new BodyError();

  const album = await db.Album.findByPk(albumId);
  if (!album) throw new NotFoundError('Album not found');

  let song = await album.createSong({ name, lyrics, trackNumber });
  song = await db.Song.findByPk(song.songId);
  
  res.status(201);
  return res.json(song);
}));

const editSongHandler = asyncHandler(async (req, res) => {
  const { songId } = req.params;
  const { name, lyrics, trackNumber } = req.body;

  if (!name && !lyrics && !trackNumber) throw new BodyError();

  const song = await db.Song.findByPk(songId);

  if (!song) throw new NotFoundError('Song not found');
  
  if (name) song.name = name;
  if (lyrics) song.lyrics = lyrics;
  if (trackNumber) song.trackNumber = trackNumber;

  console.log(song.trackNumber);

  await song.save();

  return res.json(song);
});

router.put('/songs/:songId', editSongHandler);
router.patch('/songs/:songId', editSongHandler);

router.delete('/songs/:songId', asyncHandler(async (req, res) => {
  const { songId } = req.params;
  const result = await db.Song.destroy({ where: { songId } });

  if (!result) throw new NotFoundError('Song not found');

  return res.json({ message: 'Sucessfully deleted' });
}));

module.exports = router;