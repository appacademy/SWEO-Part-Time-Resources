const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
	res.send('Welcome to the albums home page!')
})

router.get('/:albumsId', (req, res, next)=>{
	res.send(`This is the album ${req.params.albumsId}`)
})

module.exports = router;
