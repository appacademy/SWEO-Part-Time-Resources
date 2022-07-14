const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
	res.send('Welcome to the songs home page!')
})

router.get('/:songsId', (req, res, next)=>{
	res.send(`This is the songs ${req.params.songsId}`)
})

module.exports = router;
