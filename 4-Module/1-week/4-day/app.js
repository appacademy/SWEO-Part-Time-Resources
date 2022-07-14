const express = require('express');
const songsRouter = require('./songs');
const albumsRouter = require('./albums');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use('/songs' , songsRouter);
app.use('/albums', albumsRouter);

app.get('/', (req, res, next)=>{
	res.send('Welcome home!')
})

app.listen(port, ()=>{
	console.log(`Server is listening on port ${port}`)
})
