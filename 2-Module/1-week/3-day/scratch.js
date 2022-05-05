//? What is a class??
// - Template that gives us the same thing every time
// Data types use classes

//! Playing with the Array constructor - Encapsulation
// const myArr = [];
// const myArr = new Array(5);
// const myArr = new Array(5, "hello", true, null);
// const myArr = new Array(5, 2, 3, 4);
// myArr.push(undefined)
// myArr[0] = 32

// console.log(myArr)
// console.log(myArr[0])
// console.log(myArr.length)

//! Difference between .length and .anything()
// const myObj = {
// 	aProp: 25,
// 	aFunc: () => {
// 		return "Hey there!"
// 	},
// }

// const num = "aProp"

// console.log(myObj[num])
// console.log(myObj['aProp'])
// console.log(myObj.aProp)
// console.log(myObj.aFunc())

// const myArr = [1, 2, 3, 4, 5];

// const l = 'length';

// console.log(myArr.length);
// console.log(myArr[l]);
// console.log(myArr.slice(3));

//! So, what does it look like?
class Pokemon {
  constructor(name, level, type, trainer) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.trainer = trainer;
  }

  levelUp() {
    this.level++;
    console.log(`${this.name} has leveled up to ${this.level}!`);
  }

  showName() {
    console.log(`Hi my name is ${this.name}`);
  }

  run() {
    console.log(
      `${this.name} has fled from battle! ${this.trainer} must have been scared!`
    );
  }

  tackle() {
    console.log(`${this.name} used tackle!`);
  }
}

const myFirstPoke = new Pokemon('Will', 9001, 'water', 'Zaviar');
// const mySecondPoke = new Pokemon('Zaviar', 10, 'fire', 'God');

// console.log(myFirstPoke.seafoodPasta)
// const nickName = "name"
// console.log(myFirstPoke[nickName]);
// console.log(myFirstPoke['name']);
// console.log(myFirstPoke.type);

// myFirstPoke.levelUp();
// console.log(mySecondPoke.level);
// mySecondPoke.levelUp();
// mySecondPoke.run()
// myFirstPoke.showName()
// Pokemon.levelUp()

//? Let's create a Dog class together

// name
// age
// breed
// color
// favFood
// size
// mood
// bite strength
// smell
// favToy
// barkVolume
// iQ
// class Dog {
//   constructor(name, iq, barkVolume, killer = false) {
//     this.name = name;
//     this.iq = iq;
//     this.barkVolume = barkVolume;
//     this.goodDog = true;
//     this.killer = killer;
//   }

//   bark(sound = 'woof') {
//     if (this.barkVolume <= 3) {
//       console.log(`...${sound.toLowerCase()}...`);
//     } else if (this.barkVolume <= 6) {
//       console.log(`${sound}`);
//     } else if (this.barkVolume <= 10) {
//       console.log(`${sound.toUpperCase()}!!!`);
//     } else {
//       console.log(`${sound.toUpperCase().repeat(5)}!!!!!!!!!`);
//     }
//   }

//   invent() {
//     if (this.iq < 100) {
//       console.log(`${this.name} drooled a little...`);
//     } else if (this.iq <= 999) {
//       console.log(
//         `${this.name} just invented a new dog trick! Definitely worthy of a treat!`
//       );
//     } else {
//       console.log(
//         `${this.name} just invented time travel! Everyone is very impressed!`
//       );
//     }
//   }

//   destroy(target) {
//     if (this.killer) {
//       console.log(`${this.name} ripped ${target} to shreds! What a good dog!`);
//     } else {
//       console.log(`${this.name} just wags its tail`);
//     }
//   }
// }

// const smartDog = new Dog('Einstein', 65000, 2);
// smartDog.bark("bark");
// smartDog.invent();
// smartDog.destroy('a random unsuspecting citizen');

// const killerDog = new Dog('Dog Terminator', 5, 20, true);
// killerDog.bark("destroy");
// killerDog.invent();
// killerDog.destroy('a random unsuspecting citizen');

class Pikachu extends Pokemon {
  constructor(name, level, trainer, moveSets) {
    super(name, level, 'Electric', trainer);
    this.moveSets = moveSets;
    this.atk = Math.floor(Math.random() * 10) + level;
    this.def = Math.floor(Math.random() * 5) + level;
    this.speed = Math.floor(Math.random() * 12) + level;
  }

  useThunderBolt() {
    console.log(`${this.name} has used thunderbolt!!`);
    console.log(
      `${Math.floor(Math.random() * this.atk * 1.2)} damage has been dealt`
    );
  }
}

const moves = [`Tail Whip`, `Quick Attack`, `Thunder`, `Charm`, `Surf`];

const myFirstPika = new Pikachu('MegaChu', 2, 'Zaviar', moves);
// console.log(myFirstPika.name);
// console.log(myFirstPika.atk);
// myFirstPika.useThunderBolt();
// myFirstPika.tackle();

console.log(myFirstPoke.name)
myFirstPoke.tackle()
myFirstPoke.useThunderBolt()