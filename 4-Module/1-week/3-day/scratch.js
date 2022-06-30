const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

const users = {

};

let currentUser = '';

app.use(express.json());

// app.use(express.static('public'))
app.use('/zap', express.static(path.join(__dirname, "public"))) // better pratcice

const userExists = (req, res, next) => {
	if(users[req.body.username]){
		res.status(404);
		res.json({
			'status' : 'user already registered'
		})
	} else {
		next();
	}
};

const capitalized = (req, res, next) => {
	if(req.body.username[0] === req.body.username[0].toUpperCase()){
		next()
	} else {
		res.status(404);
		res.json({
			"status" : "username has to be capitalized"
		})
	}
}

const authenticate = (req, res, next) => {
	if(currentUser){
		res.sendFile(path.join(__dirname, '/private/js_meme_1.jpg'))
		//C:\Users\Alex\Documents\PT Program\updating_of_resources\SWEO-Part-Time-Resources\4-Module\1-week\3-day\private
	} else {
		next()
	}
}

const security =  [userExists, capitalized]

app.post('/signup', security , (req, res, next)=>{
	users[req.body.username] = 'registered';
	res.json({
			'status' : 'user has successfully signed up',
			'username' : req.body.username
	})
});


app.post('/login', (req, res, next)=>{
	if(users[req.body.username]){
		currentUser = req.body.username;
		res.json({
			"status" : "sucessfully logged on"
		})
	} else {
		res.status(404);
		res.json({
			"status" : "user has not signed up, please sign up"
		})
	}
});

app.get('/', authenticate, (req, res, next) => {
	res.send("Please sign up and login!")
});


// error handling
// next(error)

app.get('/test', (req, res, next)=>{
	const error = new Error('Oh you made a mistake!')
	// next(error);
	next()
});


app.use((req, res, next)=>{
	res.send('First')
});

app.use((err, req, res, next)=>{
	res.send('Second')
});


app.listen(port, ()=>{
	console.log(`Server is listening on port ${port}`)
});
