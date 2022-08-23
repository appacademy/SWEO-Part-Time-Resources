const express = require('express')
require('dotenv').config()
const app = express()
const postRouter = require('./routes/posts')

app.use(express.json());

app.use('/posts', postRouter)

app.listen(5000, () => console.log('listening on 5000'))
