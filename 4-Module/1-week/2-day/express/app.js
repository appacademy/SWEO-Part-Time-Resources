//Express server
const express = require('express');

const app = express();

app.use(express.json()) // If the requests headers content type is application/json
// this line will automatically parse the request body and place it into req.body

app.get('/', (req, res) => {
    res.send("Helloooooo") 
    //res.json()   Stringifys data for us and sends it
})

app.post('/users', (req, res) => {
    const response = {
        prop1: "value",
        prop2: "value"
    }

    res.json(response);
})

//The req object 

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`))