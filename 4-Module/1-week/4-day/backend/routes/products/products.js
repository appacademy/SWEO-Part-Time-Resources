const express = require('express')

const router = express.Router()

let currentId = 1
const data = [
	{'productName': 'iphone 14', 'productType': 'cellphone', 'id': currentId}
]

router.get('/products', (req, res)=>{
	res.send(data)
})

router.post('/products', (req, res)=>{
	const {productName, productType} = req.body
	data.push({
		productName,
		productType,
		"id" : ++currentId
	})
	res.send({productName, productType, currentId})
})


module.exports = router
