const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hey you did it')
})

app.listen(5000)