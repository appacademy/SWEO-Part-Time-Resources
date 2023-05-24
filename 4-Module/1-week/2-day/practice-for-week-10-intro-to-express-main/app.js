const express = require('express')
const app = express()

app.get("/status", (req, res) => {
	res.send("The server is alive!");
});

const port = 5000;

app.listen(port, ()=> {
	console.log(`Server is listening on port ${port}`)
})
