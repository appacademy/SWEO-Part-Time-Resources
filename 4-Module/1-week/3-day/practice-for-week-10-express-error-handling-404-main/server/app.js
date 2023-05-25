const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.get('/force-error', (req, res)=> {
	throw new Error('Forced an error')
})


app.use((req, res, next) => { // resource not found middleware
	const error = new Error(`Sorry, the requested resource couldn't be found.`)
	error.statusCode = 404
	next(error)
})

app.use((err, req, res, next)=>{ // catch all errors middleware
	const errorObj = {
		'statusCode': 500,
		'message' : err.message
	}
	if(err.statusCode){
		errorObj.statusCode = err.statusCode
	}
	res.status(errorObj.statusCode)
	res.send(errorObj)
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
