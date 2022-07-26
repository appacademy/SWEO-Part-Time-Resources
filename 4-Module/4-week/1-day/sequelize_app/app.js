const express = require('express');
const app = express();

const { Owner, Shirt } = require('./db/models');

app.use(express.json());

app.get('/', async (req, res) => {
	// console.log(Owner)
	// lazy loading
	const owner = await Owner.findByPk(1)
	const lazyData = await owner.getShirts()

	// const shirt = await Shirt.findByPk(1)
	// const lazyData = await shirt.getOwner()
	// console.log(lazyData)

	// eager loading
	// const data = await Owner.findOne({
	// 	where: {
	// 		id: 1
	// 	},
	// 	include: Shirt
	// })

	// console.log(data)
	// console.log(data.dataValues.name)
	// console.log(data.dataValues.Shirts)
	res.json({
		'success' : 'successful'
	})
})


const port = 8000;
app.listen(port, ()=>{
	console.log('Server is listening on port 8000')
})
