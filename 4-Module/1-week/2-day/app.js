// Middleware
// is a function
// its a function that takes in requests and response
// its a function that can take URI's or URL's
// its a function that has access to the next middleware/function

// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware

// a -> b -> c -> d
const express = require('express')
const app = express()

// application-level middleware -> only require the next()
// app.use()


// app.use('/', cb)
app.use(express.json()) // 2 arguments, one being opitional, first argument can be a cb or a URI, CB -> four arguments (req, res, next, err)

// app.HTTPMETHOD / app.METHOD
// app.get(), app.post(), app.patch(), app.put(), app.delete()

// endpoint
app.get('/', (req, res)=> {
	res.send('Hello World!')
}) // 2 arguments, first one URI, second one CB, CB -> three arguments (req, res, err)

app.use((req, res, next)=>{
	// console.log(req.body, ' this is our middleware before /users *********')
	const { firstName } = req.body
	if(firstName[0].toUpperCase() === firstName[0]){
		next() // next(router), next(error)
	} else {
		res.status(401)
		res.send({
			"Error": "Invalid first name please use a capital letter"
		})
	}
})

app.post('/users', (req, res)=>{
	// console.log(req.body, ' this is our middleware for /users !!!!!!!!!!!')
	res.send(req.body)
})


app.post('/posts', (req, res)=>{
	// console.log(req.body, ' this is our middleware for /users !!!!!!!!!!!')
	res.send(req.body)
})


const port = 8000

app.listen(port, ()=>{
	console.log(`Server is now running on port ${port}`)
}) // 2 arguments, first one port, second one being a callback that is a message to the user
