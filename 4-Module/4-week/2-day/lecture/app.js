const express = require('express');

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
			model: Pokemon
		},
		order: [[Pokemon, 'name']]
	})

	res.json(trainer)
})


const port = 8000;

app.listen(port, ()=>{
	console.log(`Server is listening on ${port}`)
})
