const express = require('express')

const router = express.Router();

let id = 1
const data = [
	{
		'firstName': 'Alex',
		'lastName': 'Betita',
		'id' : id
	}
]

// router.HTTPMETHOD, router.METHOD
router.get('/users', (req, res)=>{
	res.send(data)
})

router.post('/users', (req, res)=>{
	const {firstName, lastName} = req.body
	const resData = {
		firstName,
		lastName,
		'id': ++id
	}
	data.push(resData)
	res.send(resData)
})

module.exports = router
