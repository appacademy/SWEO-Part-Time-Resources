const express = require('express');

const sequelize = require('sequelize');

const { Op } = require('sequelize') // Operator

const app = express();

const { Move, Pokemon, Pokemonmove, Trainer } = require('./db/models')

app.use(express.json());

app.get('/pokemons', async (req, res) => {
	// const pokemons = await Pokemon.findAll({
	// 	order: ["name", "type1", "type2"]
	// });

	const pokemons = await Pokemon.findAll({
		order: [["name", "DESC"], ["id", "DESC"]]
	});

	res.json(pokemons)
});


app.get('/pokemons/search', async (req, res) => {

	// const { hasLetter } = req.query
	const { startsWith, hasLetter } = req.query

	// console.log(hasLetter)
	const pokemons = await Pokemon.findAll({
		where: {
			// name : {
			// 	// [Op.any]: [startsWith, hasLetter],
			// 	[Op.like] : ''
			// }

			// requested by andre
			name: {
				[Op.or] : [
					{
						name: {
							[Op.like] : 'bl'
						}
					},
					{
					 	name: {
							[Op.like] : 'ab'
					 	}
					}
				]
			}
		}
	});

	res.json(pokemons)
});


app.get('/pokemons/:page/:limit', async (req, res) => {

	const { page, limit } = req.params

	const pokemons = await Pokemon.findAll({
		order: [["name", "ASC"]],
		limit: limit,
		offset: (page - 1) * limit
	});

	res.json(pokemons)
});

app.get('/pokemons/count', async (req, res) => {
	const pokemonCount = await Pokemon.findAll({

		// aggregate
		// SUM, AVG, MIN, COUNT, MAX
		// attributes: [
		// 	// 'id',
		// 	[sequelize.fn('COUNT', sequelize.col('id')), 'totalNumberOfPokemons']
		// 	[sequelize.fn('AVG', 'id'), 'totalNumberOfPokemons']
		// ]

		attributes: {
			exclude: ['id', 'name', 'type1', 'type2', 'createdAt', 'updatedAt', 'trainerId'],
			include: [
				[sequelize.fn('COUNT', sequelize.col('id')), 'totalNumberOfPokemons'],
				[sequelize.fn('AVG', sequelize.col('id')), 'average']
			]
		}

	});

	res.json(pokemonCount)
})

app.get('/trainers/:trainerId/pokemons', async (req, res) =>{

	// lazy loading
	// const trainer = await Trainer.findByPk(req.params.trainerId);

	// const pokemons = await trainer.getPokemons({
	// 	order: [['type1', 'DESC']]
	// 	// order: ['type1']
	// })

	// eager loading
	const trainer = await Trainer.findOne({
		where: {
			id: req.params.trainerId
		},
		include: {
			model: Pokemon,
			attributes: [
				[sequelize.fn('COUNT', sequelize.col('Pokemons.id')), 'totalNumberOfPokemons']
			]
		},
		order: [[Pokemon, 'name']]
	})

	res.json(trainer)
})


const port = 8000;

app.listen(port, ()=>{
	console.log(`Server is listening on ${port}`)
})
