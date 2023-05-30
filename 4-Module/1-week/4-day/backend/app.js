const express = require('express')
const app = express()

const path = require('path')
require('dotenv').config()

const userRouter = require('./routes/users/users.js')
const productRouter = require('./routes/products/products.js')

// app level
app.use(express.json())
//app.use(path, express.static(root))
app.use('/static', express.static(path.join(__dirname,'public'))) // absolute path

// router level middlewares
app.use(userRouter)
app.use('/products',productRouter)

const port = process.env.PORT || 8000

app.listen(port, ()=>{
	console.log(`Server is now running on port ${port}`)
})
