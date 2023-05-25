const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.get('/forced-error', (req, res, next)=>{
	// throw new Error('Forced Error')
	const newError = new Error('Forced Error')
	newError.statusCode = 401
	next(newError)
})

app.use((req, res, next)=> {
	const newError = new Error("Sorry, the requested resource couldn't be found")
	newError.statusCode = 404
	next(newError)
})

app.use((err, req, res, next)=>{ // error-handling middleware
	const errorObj = {
		'message': err.message,
		'statusCode': 500
	}
	if(err.statusCode) errorObj.statusCode = err.statusCode
	res.status(errorObj.statusCode)
	res.send(errorObj)
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
