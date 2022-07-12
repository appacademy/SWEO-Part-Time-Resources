require('dotenv').config();

const express = require('express')


const {User} = require('./db/models');


const app = express()
app.use(express.json())

app.get('/users', async(req, res) => {
    // default scope gets applied to all queries
    const users = await User.findAll()
    res.json(users)

})

app.get('/users/inactive', async(req, res) => {
    // non default scopes must be called 
    // calling a scope that takes args
    // const inactiveUsers = await User.scope({method : ['isInactive', 3]}).findAll()

    //calling multiple scopes
    const users = await User.scope([{method :[ 'isInactive', 1]}, {method : ['isActive', 2]}]).findAll()
    res.json(users)
})

app.listen(5000, () => console.log('listening'))