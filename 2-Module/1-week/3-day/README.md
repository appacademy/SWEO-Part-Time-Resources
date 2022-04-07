class Pokemon {
	constructor(name, level, type, trainer){
		this.name = name;
		this.level = level;
		this.type = type;
		this.trainer = trainer;
	}

	levelUp(){
		this.level += 1;
		console.log(`${this.name} has leveled up to ${this.level}!`)
	}

	showName(){
		console.log(`Hi my name is ${this.name}`)
	}

	run(){
		console.log(`${this.name} has fled from battle!`)
	}
}

// const myFirstPokemon = new Pokemon('andrew', 9000, 'psychic', 'Jeremiah')
// const mySecondPokemon = new Pokemon('argrumon', 10, 'dargon', 'George')

// const myFirstPokemon = new Pokemon('Gulpin', 42, 'Poison', 'Alex')
// const mySecondPokemon = new Pokemon('Slugma', 1, 'Fire', 'Andre')


// console.log(myFirstPokemon)
// console.log(myFirstPokemon.level)
// myFirstPokemon.levelUp()
// console.log(myFirstPokemon.level)
// console.log(mySecondPokemon)

class Pikachu extends Pokemon {

	// constructor(name, level, type, trainer){
	// 	this.name = name;
	// 	this.level = level;
	// 	this.type = type;
	// 	this.trainer = trainer;
	// }

	constructor(name, level, trainer, moveSets) {
		super(name, level,'Electric', trainer)
		this.moveSets = moveSets
		this.atk = Math.floor(Math.random() * 10) + level;
		this.def = Math.floor(Math.random() * 5) + level;
		this.speed = Math.floor(Math.random() * 12) + level;
	}

	useThunderBolt(){
		console.log(`${this.name} has used thunderbolt!!`)
		console.log(`${Math.floor((Math.random() * this.atk * 1.2))} damage has been dealt`)
	}

	showMoveSet(){
		console.log(`${this.moveSets}`)
		console.log(`${this.moveSets[0]}`)
	}
}

const moves = [`Tail Whip`, `Quick Attack`, `Thunder`, `Charm`, `Surf`]

const myFirstPikachu = new Pikachu('Derek', 2,'Tomothy', moves)

console.log(myFirstPikachu)
// myFirstPikachu.levelUp()
// myFirstPikachu.levelUp()
// myFirstPikachu.levelUp()
// myFirstPikachu.useThunderBolt()

// console.log(myFirstPokemon)
// console.log(mySecondPokemon)

// myFirstPokemon.levelUp()
// console.log(mySecondPokemon.level)
// mySecondPokemon.levelUp()
// console.log(mySecondPokemon.level)

// const moves = [`Tail Whip`, `Quick Attack`, `Thunder`, `Charm`]

// const myFirstPikachu = new Pikachu('andrew', 45, 'Jeremiah', moves)
// myFirstPikachu.showMoveSet()

// myFirstPikachu.levelUp()
// myFirstPikachu.useThunderBolt()
