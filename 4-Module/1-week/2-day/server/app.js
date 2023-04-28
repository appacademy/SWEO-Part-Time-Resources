const express = require('express');

const app = express();

app.use(express.json()) // Listens to all requests and when it sees a request with json in the body
// it automatically parses it and sets it equal to req.body

app.get('/', (req, res) => {
    res.send(req.body) 
})

app.post('/users', (req, res) => {
    res.json(req.body);
})

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));