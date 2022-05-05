//? What is a class?
// - Blueprint to make whatever I want
// Data types, we need this to be consistent!

//! Encapsulation - We don't care about all the weird Array things
// const myArr = [5];
// const myArr = new Array(5);
// const myArr = new Array("hello", true, 20, null);

// myArr.push(43)
// myArr[0] = 29
// myArr.push(undefined)

// console.log(myArr)
// console.log(myArr[0])

// const myObj = {
// 	aProp: 25,
// 	aFunc: () => {
// 		return "Hello World"
// 	}
// }

// const num = 'aProp'

// // console.log(myObj.aProp)
// console.log(myObj[num])
// console.log(myObj.aFunc())

// const myArr = [ 1, 2, 3, 4, 5 ]

// const l = "length"

// console.log(myArr[l])
// console.log(myArr["length"])
// console.log(myArr.length)
// console.log(myArr.slice(3))

// const myObj = {
//   name: 'Zaviar',
//   age: 100000,
// };

class Pokemon {
  constructor(name, level, type, trainer) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.trainer = trainer;
  }

  levelUp() {
    // this.level++
    // this.level--
    this.level += 1;
    console.log(`${this.name} has leveled up to ${this.level}!`);
  }

	showName() {
    console.log(`Hi my name is ${this.name}`);
  }

  run() {
    console.log(`${this.name} has fled from battle!`);
  }
}

// const myFirstPoke = new Pokemon('Will', 9001, 'water', 'Zaviar');
// const mySecondPoke = new Pokemon('Zaviar', 10, 'fire', 'God');

// console.log(myFirstPoke);
// console.log(mySecondPoke);
// console.log(myFirstPoke.name)
// myFirstPoke.levelUp();
// mySecondPoke.levelUp();
// console.log(myFirstPoke);
// console.log(mySecondPoke);
// myFirstPoke.showName()
// console.log(myFirstPoke);

class Pikachu extends Pokemon {
	constructor(name, level, trainer, moveSets) {
		super(name, level, "Electric", trainer) 
		this.moveSets = moveSets
		this.atk = Math.floor(Math.random() * 10) + level;
    this.def = Math.floor(Math.random() * 5) + level;
    this.speed = Math.floor(Math.random() * 12) + level;
	}

	useThunderBolt() {
		console.log(`${this.name} used thunderbolt`)
		console.log(
      `${Math.floor(Math.random() * this.atk * 1.2)} damage has been dealt`
    );
	}

	showMoveSet() {
		console.log(this.moveSets)
	}
}

const moves = [`Tail Whip`, `Quick Attack`, `Thunder`, `Charm`, `Surf`];


const myFirstPika = new Pikachu("MegaChu", 50, "Zaviar", moves)

// myFirstPika.useThunderBolt()
// myFirstPika.showMoveSet()
// myFirstPika.levelUp()

console.log(myFirstPika)