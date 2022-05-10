//? Context asks upon invoking: Where am I?
// class Games {
//   static library = [];

//   constructor(name, genre) {
//     this.name = name;
//     this.genre = genre;
//     // Games.library.push(this);
// 		console.log(this)
//   }
// }

// //? Which name and genre am I looking at?
// const chess = new Games('Chess', 'Strategy');
// console.log(chess)
// const animalCrossing = new Games('Animal Crossing', 'Farming Sim');
// console.log(Games.library)
// console.log(chess.name)

class Test {
  testFunc() {
    debugger;
    console.log(this);
    console.log(`this is equal to test1: ${this === test1}`);
  }
}

//? Classes just create their methods, they don't invoke them
const test1 = new Test();
// Calling the method on the instance
// test1.testFunc(); // true

// // Calling on a different instance
// const test2 = new Test();
// test2.testFunc();

//!

// Calling the method outside the class
// const test1Func = test1.testFunc;
// console.log(test1Func, 41);
// test1Func(); // false

//! 

// Calling the method as a callback
// setTimeout(test1.testFunc, 1000); // false
// const arr = ["test",  "array"]
// arr.map(test1.testFunc) // false
// arr.map((el) => {
// 	el += 1
// })

//!

// Using this in Function Declaration Syntax
function someFunc() {
  console.log(this);
}
// someFunc(); // Global Object

// const someFunc = () => {
// 	console.log(this)
// }
// someFunc(); // Empty?



