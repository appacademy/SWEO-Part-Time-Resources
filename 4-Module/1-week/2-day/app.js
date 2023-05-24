// MIDDLEWARE
// is just a function
// its a function that handles Request and Responses
// its a function that takes in URI or routes
// its a function that has access to the next middleware

// a -> b -> c -> d

const express = require('express')
const app = express()

// app.use() //
app.use(express.json()) // it checks the content-type, parses the body

// app.HTTPMETHOD || app.METHOD
// app.get, app.post, app.patch, app.put, app.delete

// app.use('/users', ()=> {
// 	// prevent anonymous or non logged in users from accessing this endpoint
// }) // 2 arguments, first one you can pass in the uri, second cb

// app.use(()=>{

// })
// endpoint
app.get('/', (req, res)=> {
	res.send('Hello World!')
}) // 2 argument, first argument URI, second argument CB,

app.use((req, res, next)=>{  // cb -> takes in 3 arguments req, res, next
	const {firstName} = req.body
	if(firstName[0].toUpperCase() === firstName[0]){
		next()
	} else {
		res.status(401)
		res.send({
			'error' : 'Please use Capital Letters for your name'
		})
	}
})

// endpoint
app.post('/users', (req, res)=>{
	console.log('app.post MIDDLEWARE')
	console.log(req.body)
	res.send()
})

const port = 8000

app.listen(port, ()=> {
	console.log(`Server is now running ${port}`)
}) // 2 arguments, first one being the port, second one being the message
