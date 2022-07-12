require('dotenv').config();

const express = require('express')


const {User} = require('./db/models')


const app = express()
app.use(express.json())

app.get('/users', async(req, res) => {
    // default scope applied to all queries 
    const users = await User.findAll()
    res.json(users)
})

app.get('/users/inactive', async(req, res) => {
    // calling multiple scopes
    const users = await User.scope( ['isActive', 'isInactive']).findAll()
    res.json(users)
})

app.listen(5000, () => console.log('listening'))