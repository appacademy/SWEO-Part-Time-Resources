// next()
// middlewares
// middplepoint

// routes
// regex within routes

// how to properly order our routes

// response/request methods and properties
// res.status()
// res.json()
// res.send()

// request.params
// request.query

const express = require('express');

const app = express();
const port = 8000;

//cb = (req, res, next) => {}

app.use(express.json());

// custom middleware
app.use((req, res, next)=>{
	console.log('Im a middleware');
	console.log(req.body);
	next();
});

app.get('/', (req, res, next)=>{
	console.log('index')
});

app.post('/', (req, res, next)=>{
	// console.log(res.body)
	// res.send(req.body)
	// res.send('you posted!')
	res.json({
		"name" : "Megha",
		"lastName" : "Saghal",
		"birthday" : "04/06/????"
	})
});

// middlepoint
app.post('/home', (req, res, next)=>{
	console.log(req.url)
	next()
	}, (req, res, next)=>{
		res.send(`You've reached home`)
});

// middlepoint
app.get('/person/:personId', (req, res, next)=>{
	if(req.params.personId === '1') next()
	else res.send('you are a regular person')
}, (req, res, next)=>{
	res.send('You are person 1')
});


app.get('/test/message?message=', (req, res, next)=>{
	console.log(req.query)
})

app.get('/go+gle', (req, res, next)=>{
	res.send(`You've reached this endpoint`)
});


// examples
const messageHandler = (req, res, next)=>{
	if(req.query.message){
		next();
	} else {
		res.status(404);
		res.send('message required')
	}
}
// abstracted middle point

const capitalHandler = (req, res, next)=>{
	if(req.query.message[0] !== req.query.message[0].toUpperCase()){
		res.status(404);
		res.send('message should be capitalized')
	} else {
		next();
	}
}

const lengthHandler = (req, res, next) => {
	if(req.query.message.length < 10){
		res.status(404);
		res.send('message should be longer than 10 letters including spaces')
	} else {
		next();
	}
}

app.get('/info',messageHandler, capitalHandler, lengthHandler, (req, res, next) =>{
	res.send(req.query.message)
});


app.listen(port, ()=>{
	console.log('Server is listening on port 8000')
})
