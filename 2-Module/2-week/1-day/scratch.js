// class Games {
//   static library = [];

//   constructor(name, genre) {
//     this.name = name;
//     this.genre = genre;
//     Games.library.push(this);
//   }
// }

// //? Which name and genre am I looking at?
// const chess = new Games('Chess', 'Strategy');
// const animalCrossing = new Games('Animal Crossing', 'Farming Sim');

// console.log(chess)
// console.log(animalCrossing)
// console.log(Games.library)

class Test {
  testFunc() {
    debugger;
    console.log(this);
    console.log(`this is equal to test1: ${this === test1}`);
  }
}

//? The class just creates the function, doesn't run it.
const test1 = new Test();
// Calling the method on the instance
test1.testFunc(); // true

// Calling on a different instance
const test2 = new Test();
test2.testFunc(); // Empty "Test {}" NOT === to test1

//!

// Calling the method outside the class
const test1Func = test1.testFunc;
console.log(test1Func, 39);
test1Func(); // false
test1.testFunc() // true

//!

// Calling the method as a callback
setTimeout(test1.testFunc, 1000); // false
const arr = ["test",  "array"]
arr.map(test1.testFunc) // false

//!

// // Using this in Function Declaration Syntax
// function someFunc() {
//   console.log(this);
// }
// someFunc(); // Global Object

// let someFunc = function () {
//   console.log(this);
// };
// someFunc(); // Global Object

// const someFunc = () => {
//   console.log(this);
// };

// someFunc(); // undefined
