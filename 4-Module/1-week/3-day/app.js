// application level -> app.use(cb), cb -> (req, res, next)
// router level -> app.HTTPMETHOD / app.METHOD ex: app.get, app.post
// error handling -> app.use(cb), cb -> (err, req, res, next)
// built in
// third party

const express = require('express')
const app = express()


app.use((req, res, next)=>{
	// console.log('APPLICATION LEVEL MIDDLEWARE')
	next()
	// throw new Error('SERVER CRASHED')
	// next('error')
	// const error = new Error('Server Crashed')
	// next(error)
})

// app.use((req, res, next)=>{
// 	console.log('TWO')
// 	next()
// })
// app.use((req, res, next)=>{
// 	console.log('THREE')
// 	next()
// })
// app.use((req, res, next)=>{
// 	console.log('FOUR')
// 	const error = new Error('Server Crashed')
// 	next()
// })

// endpoints
// router level middlewares can take in regEX as part of the URI
// regEX -> regular expressions
// * -> capture any character, letter or etc..

const verification = (req, res, next) => next()
const validation = (req, res, next) => {
	console.log('Validation')
	next()
}
const authentication = (req, res, next) => {
	console.log('Authentication')
	next()
}
const verified = (req, res) => res.send('VERIFIED')

app.get('/profile', verification, validation, authentication, verified) // router level that contains 4 middle wares

app.get('/users', [verification, validation, authentication], (req, res)=>{
	res.send('USER IS VERIFIED')
})


app.use((err, req, res, next)=>{ // general error handler
	const errObj = {
		'message': err.message,
		'stackTrace' : err.stackTrace,
		'statusCode' : 500
	}
	if(err.statusCode){
		errObj.statusCode = err.statusCode
	}
	res.send(errObj)
})


const port = 8000

app.listen(port, ()=>{
	console.log(`Server is running on port ${port}`)
})
