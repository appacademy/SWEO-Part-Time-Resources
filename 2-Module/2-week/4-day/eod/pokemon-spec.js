const { expect } = require("chai");

const Trainer = require("../class/trainer.js");
const Pokemon = require("../class/pokemon.js");
const PokemonCenter = require("../class/pokemon-center.js");



describe("Trainer", function(){
	it('should set name and age', function(){

		const trainer = new Trainer('Patrick', 24);

		expect(trainer.name).to.equal('Patrick')
		expect(trainer.age).to.deep.equal(24);
	})

	it('should have a default currency', function(){

		const trainer = new Trainer('Patrick', 24);

		expect(trainer.currency).to.deep.equal(3000)
	})

	it('should have default pokemons', function(){

		const trainer = new Trainer('Patrick', 24);

		expect(trainer.pokemons).to.deep.equal([])
	})

	it('should be able to capture pokemon', function(){

		const trainer = new Trainer('Patrick', 24);

		const pokemon = new Pokemon('MewTwo', 250, 'Psychic', 50, 'MewTwo');

		trainer.catch(pokemon)

		expect(trainer.pokemon.length).to.equal(1);
		expect(trainer.pokemon[0]).to.deep.equal(pokemon);

		const pokemon2 = new Pokemon('Pikachu', 120, 'Electric', 21, 'Pikachu');

		trainer.catch(pokemon2)

		expect(trainer.pokemon.length).to.equal(2);
		expect(trainer.pokemon[1]).to.deep.equal(pokemon2);
	})

	it('should be able to release a pokemon', function(){

		const trainer = new Trainer('Patrick', 24);

		const pokemon1 = new Pokemon('Mew2', 250, 'Psychic', 50, 'MewTwo');
		const pokemon2 = new Pokemon('Tank', 260, 'Fighting/Steel', 60, 'Lucario');
		const pokemon3 = new Pokemon('Pika', 120, 'Electric', 21, 'Pikachu');
		const pokemon4 = new Pokemon('Greeny', 120, 'Grass', 21, 'Bulbasuar');
		const pokemon5 = new Pokemon('Fish?', 10, 'Water', 1, 'Magikarp');

		trainer.pokemons = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5]

		const newPokemons = [pokemon1, pokemon2, pokemon4, pokemon5]

		trainer.release('Pika');

		expect(trainer.pokemons.length).to.equal(4);
		// expect(trainer.pokemons[0]).to.deep.equal(pokemon1);
		// expect(trainer.pokemons[1]).to.deep.equal(pokemon2);
		// expect(trainer.pokemons[2]).to.deep.equal(pokemon4);
		// expect(trainer.pokemons[3]).to.deep.equal(pokemon5);
		expect(trainer.pokemons).to.deep.equal(newPokemons)
	})

	it('should only have a max of 6 pokemons', function(){

		const trainer = new Trainer('Patrick', 24);

		const pokemon = new Pokemon('Test', 10, 'Test', 10);

		trainer.pokemons = [pokemon,pokemon,pokemon,pokemon,pokemon,pokemon]

		expect(()=>
			trainer.catchPokemon.call(trainer, pokemon)
		).to.throw(Error);
	})

})


describe('Pokemon', function(){
	it('should have name, hp, type, level and pokemon', function(){

		const pokemon = new Pokemon('Lucario', 260, 'Fighting/Steel', 60, 'Lucario');

		expect(pokemon.name).to.equal('Lucario');
		expect(pokemon.maxHp).to.deep.equal(260);
		expect(pokemon.type).to.equal('Fighting/Steel');
		expect(pokemon.level).to.deep.equal(60);
		expect(pokemon.pokemon).to.deep.equal('Lucario');
	})

	it('should have maxHp and currentHp', function(){

		const pokemon = new Pokemon('Lucario', 260, 'Fighting/Steel', 60, 'Lucario');

		expect(pokemon.maxHp).to.deep.equal(260);
		expect(pokemon.currentHp).to.deep.equal(260);
	})

	it('should be able to rename the pokemon', function(){

		const pokemon = new Pokemon('Lucario', 260, 'Fighting/Steel', 60, 'Lucario');

		expect(pokemon.name).to.equal('Lucario');

		pokemon.rename('Tank');

		expect(pokemon.name).to.equal('Tank');
	})

	it('should be able to level up pokemon but not beyond 100', function(){

		const pokemon = new Pokemon('Lucario', 260, 'Fighting/Steel', 60, 'Lucario');

		pokemon.levelUp();

		expect(pokemon.level).to.equal(61);

		const maxPokemon = new Pokemon('Bird', 400, 'Psychic/Flying', 100, 'Lugia');

		expect(() =>
			maxPokemon.levelUp.call(maxPokemon)
		).to.throw(TypeError)
	})

	it('should be able to check pokemon status', function(){


		const trainer = new Trainer('Patrick', 24);
		const pokemon1 = new Pokemon('Lucario', 260, 'Fighting/Steel', 60, 'Lucario');
		const pokemon2 = new Pokemon('Bird', 400, 'Psychic/Flying', 100, 'Lugia');

		trainer.catch(pokemon1)
		trainer.catch(pokemon2)

		pokemon2.currentHp = 0;
		pokemon1.currentHp = 100;


		expect(trainer.check('Bird')).to.be.equal('Bird has fainted.')
	})
})


describe('Pokemon Center', function(){

	it('should have a default heal cost', function(){

		const pokeCenter = new PokemonCenter();

		expect(pokeCenter.healCost).to.deep.equal(200)
	})

	it('should only heal if trainer has enough currencty', function(){

		const pokeCenter = new PokemonCenter();
		const trainer = new Trainer('Patrick', 24);
		const pokemon = new Pokemon('Lucario', 260, 'Fighting/Steel', 60, 'Lucario');

		trainer.catch(pokemon)
		trainer.currency = 100;

		pokemon.currentHp = 1;

		expect(() => pokeCenter.healPokemons(trainer)).to.throw(Error)
		expect(pokemon.currentHp).to.deep.equal(1)
	})

	it('should heal all pokemons to full heatlh', function(){

		const pokeCenter = new PokemonCenter();
		const trainer = new Trainer('Patrick', 24);


		const pokemon1 = new Pokemon('Mew2', 250, 'Psychic', 50, 'MewTwo');
		const pokemon2 = new Pokemon('Tank', 260, 'Fighting/Steel', 60, 'Lucario');
		const pokemon3 = new Pokemon('Pika', 120, 'Electric', 21, 'Pikachu');
		const pokemon4 = new Pokemon('Greeny', 120, 'Grass', 21, 'Bulbasuar');
		const pokemon5 = new Pokemon('Fish?', 10, 'Water', 1, 'Magikarp');

		trainer.pokemons = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5]

		pokemon1.currentHp = 1;
		pokemon2.currentHp = 1;
		pokemon3.currentHp = 1;
		pokemon4.currentHp = 1;
		pokemon5.currentHp = 1;

		pokeCenter.healPokemons(trainer);

		expect(trainer.currency).to.deep.equal(2800)

		for(let i = 0; i < trainer.pokemons.length; i++){
			let currentPokemon = trainer.pokemons[i]
			expect(currentPokemon.currentHp).to.deep.equal(currentPokemon.maxHp)
		}
	})
})
