const express = require('express');
const router = express.Router();

const artistsRouter = require('./artists');
const albumsRouter = require('./albums');
const songsRouter = require('./songs');

router.use(artistsRouter);
router.use(albumsRouter);
router.use(songsRouter);

module.exports = router;