const express = require('express')
const app = express()
const path = require('path');

// load up environmental variables
require('dotenv').config()

const userRouter = require('./routes/users/users.js')
const productRouter = require('./routes/products/products.js')

// parses Json
app.use(express.json())
// serves static files
// app.use('/static', express.static('public')) //local development
app.use('/static', express.static(path.join(__dirname,'public'))) // production code

// router level middlewares
app.use(userRouter)
app.use(productRouter)

const port = process.env.PORT || 8000

app.listen(port, ()=>{
	console.log(process.env.SECRET)
	console.log(`Serve is up on ${port}`)
})
