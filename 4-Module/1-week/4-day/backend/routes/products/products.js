const express = require('express')

const router = express.Router();

let id = 1
const data = [
	{
		'productName': 'RTX 4090',
		'productType': 'Graphics Card',
		'id' : id
	}
]

// router.HTTPMETHOD, router.METHOD
router.get('/', (req, res)=>{
	res.send(data)
})

router.post('/', (req, res)=>{
	const {productName, productType} = req.body
	const resData = {
		productName,
		productType,
		'id': ++id
	}
	data.push(resData)
	res.send(resData)
})



module.exports = router
