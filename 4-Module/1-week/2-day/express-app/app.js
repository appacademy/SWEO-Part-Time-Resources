const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(`
        <input type='text' value='Baylen' />
    `)
})

app.listen(5000)