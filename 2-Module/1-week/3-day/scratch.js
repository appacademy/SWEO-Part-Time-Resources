// // Define a class with the class keyword followed by the name with the first
// // letter capital and the rest of the words camel case
// class Taco {
//   // constructor is invoked when you create a new class such as:
//   // new Taco("chicken", ["sour cream", "cheese"])
//   constructor(meat, toppings = []) {
//     // define any instance variables or logic that needs to be run when an
//     // instance of the class is created
//     this.meat = meat
//     this.toppings = toppings
//     this.tortillaType = 'corn'
//   }
//   // instance method
//   assemble() {
//     return `These are some delicious ${this.meat} tacos on a ${
//       this.tortillaType
//     } tortilla with all the toppings ${this.toppings.join(', ')}.`
//   }
// }
// // create a instance of a Taco and store in a variable
// const carnitasTaco = new Taco('carnitas', ['guacamole', 'salsa'])
// const chickenTaco = new Taco('chicken', ['sour cream', 'cheese'])
// // call an instance method
// console.log(carnitasTaco.assemble())
// console.log(chickenTaco.assemble())

// IceCream
// Properties:
//  - flavor array
//  - toppings array
//  - iceCreamMantle string
//  - amount number
//  Actions:
//  - melt() - decrement amount
//  - togo() - put it all together

// class IceCream {
//   constructor(flavors, toppings, iceCreamMantle, amount) {
//     this.flavors = flavors
//     this.toppings = toppings
//     this.iceCreamMantle = iceCreamMantle
//     this.amount = amount
//   }

//   eat() {
//     //  - eat() - decrement amount
//     // amount = 3
//     // eat()
//     // amount = 2
//     if (this.amount > 0) {
//       console.log('This is some yummy ice cream!')
//       this.amount--
//     }
//     if (this.amount === 0) {
//       return 'This was some yummy ice cream!'
//     }
//   }

//   melt() {
//     if (this.amount > 0) {
//       const interval = setInterval(() => {
//         console.log('Im melting...')
//         this.amount--
//         if (this.amount === 0) {
//           console.log("I'm Melted")
//           clearInterval(interval)
//         }
//       }, 1000)
//     }
//   }

//   togo() {
//     return {
//       ingredients: [...this.toppings, ...this.flavors],
//     }
//   }
// }

// const chocolateIceCream = new IceCream(['chocolate'], ['nuts'], 'cone', 5)
// console.log(chocolateIceCream.amount)
// console.log(chocolateIceCream.togo())
// console.log(chocolateIceCream.amount)

// Dog Ideas
// Attributes:
// -Size
// -Breed
// -Barks (Boolean)
// -Color
// -Age
// -furType
// -barkVolume
// -Walked (Boolean)
// -Listen (Boolean)

// Methods:
// -dogBark()
// -walkingDog()
// -findingDog()
// -howOld()
// -rollOver() - console.log("wheres my treat?")
// -makePuppyDogEyes() - begs for treats
// -walk() - update walked value and walks dog if they are not already walked
// -praise() - if they listen you praise them otherwise you get mad
