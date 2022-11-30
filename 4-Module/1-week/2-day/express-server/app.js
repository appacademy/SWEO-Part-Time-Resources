const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(201).json({name: 'James'})
})


const port = 5000

app.listen(port, () => console.log('quick server', port))