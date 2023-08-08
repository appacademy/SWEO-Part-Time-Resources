const express = require('express')

const router = express.Router()

const data = [
	{'firstName': 'Alex', 'lastName': 'Betita', "id": 1}
]

let currentId = 1

// router.HTTPMETHOD / router.METHOD

router.get('/users', (req, res)=>{
	res.send(data)
})

router.post('/users', (req, res)=>{
	const {firstName, lastName} = req.body
	data.push({
		firstName,
		lastName,
		"id" : ++currentId
	})
	res.send({firstName, lastName, currentId})
})

module.exports = router
