const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const db = require('../db');

const { NotFoundError, BodyError } = require('../errors');

router.get('/artists/:artistId/albums', asyncHandler(async (req, res) => {
  const { artistId } = req.params;

  const artist = await db.Album.findByPk(artistId);
  if (!artist) throw new NotFoundError('Artist not found');

  const albums = await db.Album.findAllByArtistId(artistId);

  return res.json(albums);
}));

router.get('/albums/:albumId', asyncHandler(async (req, res) => {
  const { albumId } = req.params;
  const album = await db.Album.findById(albumId);

  if (!album) throw new NotFoundError('Album not found');

  return res.json(album);
}));

router.post('/artists/:artistId/albums', asyncHandler(async (req, res) => {
  const { artistId } = req.params;
  const { name } = req.body;
  
  if (!name) throw new BodyError();

  const artist = await db.Artist.findByPk(artistId);

  if (!artist) throw new NotFoundError('Artist not found');

  let album = await artist.createAlbum({ name });
  album = await db.Album.findByPk(album.albumId);
  res.status(201);
  return res.json(album);
}));

const editAlbumHandler = asyncHandler(async (req, res) => {
  const { albumId } = req.params;
  const { name } = req.body;
  
  if (!name) throw new BodyError();

  const album = await db.Album.findByPk(albumId);

  if (!album) throw new NotFoundError('Album not found');
  
  album.name = name;

  await album.save();

  return res.json(album);
});

router.put('/albums/:albumId', editAlbumHandler);
router.patch('/albums/:albumId', editAlbumHandler);

router.delete('/albums/:albumId', asyncHandler(async (req, res) => {
  const { albumId } = req.params;
  const result = await db.Album.destroy({ where: { albumId } });

  if (!result) throw new NotFoundError('Album not found');

  return res.json({ message: 'Sucessfully deleted' });
}));

module.exports = router;