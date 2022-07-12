require('dotenv').config();

const express = require('express')


const {User} = require('./db/models');


const app = express()
app.use(express.json())

app.get('/users', async(req, res) => {
    const users = await User.findAll()
    res.json(users)

})

app.get('/users/inactive', async(req, res) => {
    // calling a scope that takes args
    // const inactiveUsers = await User.scope({method : ['isInactive', 3]}).findAll()

    //calling multiple scopes
    const users = await User.scope(['isInactive', 'isActive']).findAll()
    res.json(users)
})

app.listen(5000, () => console.log('listening'))