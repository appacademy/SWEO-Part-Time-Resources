const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const db = require('../db');

const { NotFoundError, BodyError } = require('../errors');

router.get('/artists', asyncHandler(async (req, res) => {
  const artists = await db.Artist.findAll();

  return res.json(Object.values(artists));
}));

router.get('/artists/:artistId', asyncHandler(async (req, res) => {
  const { artistId } = req.params;

  const artist = await db.Artist.findById(artistId);

  if (!artist) throw new NotFoundError('Artist not found');
  
  return res.json(artist);
}));

router.post('/artists', asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) throw new BodyError();

  let artist = await db.Artist.create({ name });
  artist = await db.Artist.findByPk(artist.artistId);
  
  res.status(201);
  return res.json(artist);
}));

const editArtistHandler = asyncHandler(async (req, res) => {
  const { artistId } = req.params;
  const { name } = req.body;
  
  if (!name) throw new BodyError();

  const artist = await db.Artist.findByPk(artistId);

  if (!artist) throw new NotFoundError('Artist not found');
  
  artist.name = name;

  await artist.save();

  return res.json(artist);
});

router.put('/artists/:artistId', editArtistHandler);
router.patch('/artists/:artistId', editArtistHandler);

router.delete('/artists/:artistId', asyncHandler(async (req, res) => {
  const { artistId } = req.params;
  
  const result = await db.Artist.destroy({ where: { artistId } });
  
  if (!result) throw new NotFoundError('Artist not found');

  return res.json({ message: 'Sucessfully deleted' });
}));

module.exports = router;