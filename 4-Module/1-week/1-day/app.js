const express = require('express');
const html = require('ejs');
const cors = require('cors');
// const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.set('view engine', 'html');
app.engine('html', html.renderFile);
app.use(cors())

// endpoint(route, (req, res))
app.get(`/`, (req, res)=>{
	// res.send('<li>Hello World</li>')
	res.json({
		'name' : 'Alex'
	})
	// res.render('Index')
});

app.get(`/profile`, (req, res)=>{
	res.render('Profile')
});

app.post(`/`, (req, res)=>{
	res.send('You made a post request')
});

app.put(`/`, (req, res)=>{
	res.send('You made a put request')
});

app.patch(`/`, (req, res)=>{
	res.send('You made a patch request')
});

app.delete(`/`, (req, res)=>{
	res.send('You made a delete request')
});

app.listen(port, ()=>{
	console.log(`Server is listening on port ${port}`)
});
