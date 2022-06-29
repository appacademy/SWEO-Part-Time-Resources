// middleware
// middlepoints

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json())

app.use((req, res, next)=>{
	console.log(req.body)
	next()
})

// app.use((req, res, next)=>{
// 	console.log(req.body)
// 	next()
// })

app.post('/home', (req, res, next) => {
	console.log(req.body)
	next()
}, (req, res, next)=>{
	res.send(`You've created a middlepoint`)
});

app.post('/home*', (req, res, next) => {
	console.log(req.url)
})

app.post('/person/:personId', (req, res, next)=>{
	console.log(req.params.personId)
	if(req.params.personId === "1000") next('route')
	else next()
	}, (req, res, next)=>{
		console.log('regular person')
})

app.post('/person/:personId', (req, res, next) =>{
	// res.send('your the 1000th person')
	// res.status()
	res.json()
})

app.listen(port, ()=>{
	console.log('Server is now listening on port 3000')
})
