const express = require('express')

const app = express()

app.get('/', (req, res) => {

    // res.send('ayeooadfasdfasdfasdfasdfoo changeed again!!!!!!!!!!')
    res.status(201).json({"hey": "we are json"})
})




const port = 5000
app.listen(port, () => console.log('quick server listen', 5000))