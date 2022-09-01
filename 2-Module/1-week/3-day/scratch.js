// // const myArr = [1,2,3,4]

// const myArr = new Array(1,2,3,'james')
// console.log(myArr)

// Define a class with the class keyword followed by the name with the first
// letter capital and the rest of the words camel case
// class Taco {
//     // constructor is invoked when you create a new class such as:
//     // new Taco("chicken", ["sour cream", "cheese"])
//     constructor(meat, toppings = []) {
//       // define any instance variables or logic that needs to be run when an
//       // instance of the class is created
//       this.meat = meat
//       this.toppings = toppings
//       this.tortillaType = 'corn'
//     }
//     // instance method
//     assemble() {
//       return `These are some delicious ${this.meat} tacos on a ${this.tortillaType} tortilla with all the toppings ${this.toppings.join(', ')}.`
//     }
//   }
//   // create a instance of a Taco and store in a variable
//   const carnitasTaco = new Taco('carnitas', ['guacamole', 'salsa'])
//   const beefTaco = new Taco('beef', ['sour cream', 'jalepenos'])

//   console.log(carnitasTaco)
//   console.log(beefTaco)
  // call an instance method
//   console.log(carnitasTaco.assemble())

const Guitar = require('./guitar')
const Trumpet = require('./trumpet')
const Instrument = require('./instrument')
  
  
  // What will print to the console?
  const jamesGuitar = new Guitar('guitar1', 'strings');
  const jamesTrumpet = new Trumpet();
  console.log(jamesGuitar)
  jamesGuitar.play();
//   jamesTrumpet.play();
  jamesGuitar.strumGuitar();
//   jamesTrumpet.releaseSpitValve();