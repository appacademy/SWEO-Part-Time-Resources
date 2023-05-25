// Application-level middleware // app.use() takes in CB -> (req, res, next)
// Router-level middleware // app.HTTPMETHOD / app.METHOD
// Error-handling middleware // app.use() takes in CB -> (err, req, res, next)
// Built-in middleware // app.use(express.json())
// Third-party middleware

// regEx -> regular expressions
// * -> it captures everything
const express = require('express')
const app = express()

// app.use((req, res, next)=> {
// 	throw new Error('WE MADE AN OOPSIE')
// })

app.use((req, res, next)=>{
	// console.log('Hello world')
	// next('error')
	throw new Error('Invalid Credentials')
})

app.get('/users/:id', (req, res)=>{
	res.send(
		{
			"firstName": "Kate",
			"lastName": "Cizewski"
		}
	)
})

app.get('/users', (req, res)=>{
	throw new Error('YOU DO NOT HAVE VALID CREDENTIALS')
	// res.send([
	// 	{
	// 		"firstName": "Alex",
	// 		"lastName": "Betita"
	// 	},
	// 	{
	// 		"firstName": "Kate",
	// 		"lastName": "Cizewski"
	// 	},
	// 	{
	// 		"firstName": "Bill",
	// 		"lastName": "Adams"
	// 	}
	// ])
})

app.use((err, req, res, next)=>{
	if(err.message){
		const errObj = {"message": err.message}
		throw new Error(errObj.message)
	} else {
		res.send({
			"message": "server is down"
		})
	}
})

app.use((err, req, res, next)=>{
	const generalError = {
		"message" : err.message,
		"statusCode" : 400,
		"errorType": "server error"
	}
	res.status(generalError.statusCode)
	res.send(generalError)
})


const port = 8000


app.listen(port, ()=> {
	console.log(`Server is up and running and now ready to be used at port ${port}`)
})
