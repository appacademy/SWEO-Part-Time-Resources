const express = require('express');
const app = express();

const { Owner, Shirt } = require('./db/models');

app.use(express.json());

app.get('', async (req, res) => {

	// lazy loading
	// const owner = await Owner.findByPk(1)

	// const shirts = await owner.getShirts();

	// const shirt = await Shirt.findByPk(1);
	// const owner = await shirt.getOwner();

	// console.log(owner)

	// eager loading
	const owner = await Owner.findOne({
		where: {
			id: 1
		},
		include: Shirt
	})

	// console.log(owner.dataValues.name);
	// console.log(owner.dataValues.Shirts[0].dataValues.type);
	owner.dataValues.Shirts.forEach(shirt => console.log(shirt.dataValues.type));
	res.json({
		'Status' : 'Success'
	})
})


const port = 8000;

app.listen(port, ()=>{
	console.log('Server is listening')
})
