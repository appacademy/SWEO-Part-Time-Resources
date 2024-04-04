// SCOPES

// EXAMPLE 1
// global scope
// let string = 'I am in the global scope'
// console.log(string)

// // function scope
// const myFunc = () => {
//     // let string = 'I am in the function scope'
//     console.log(string)

//     // block scope
//     if(true){
//         // let string = 'I am in the block scope'
//         console.log(string)
//     }
// }
// myFunc()

// EXAMPLE 2
// global scope
// let string1 = 'I am in the global scope'
// console.log('START OF GLOBAL SCOPE')
// console.log(string1)
// // console.log(string2)
// // console.log(string3)
// // function scope
// const myFunc = () => {
//     let string2 = 'I am in the function scope'
//     console.log('START OF FUNCTION SCOPE')
//     console.log(string1)
//     console.log(string2)
//     // console.log(string3)
//     // block scope
//     if(true){
//         let string3 = 'I am in the block scope'
//         console.log('START OF BLOCK SCOPE')
//         console.log(string1)
//         console.log(string2)
//         console.log(string3)
//     }

// }
// myFunc()

// EXAMPLE 3
// if (Math.random() > 0.5) {
//     console.log(x)
//     let x = 1;
//   } else {
//     console.log(x)
//     let x = 2;
// }
// console.log(x); // ReferenceError: x is not defined


// CLOSURES
// Javascript creates a "closure" aka a snapshot of all variables the function scope has access to when you define a function
// FROM MDN

// EXAMPLE 1

// function init() { // (closure) snapshot of the variables accessable: name
//     let name = "Jesse"; // name is a local variable created by init
//     function displayName() { // (closure) snapshot of the variables accessable: name
//         // displayName() is the inner function, that forms the closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();

// EXAMPLE 2
// function makeAdder(x) {
//     return function (y) { // (closure): snapshot of accessible variables: x
//       return x + y;
//     };
// }

// // const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// // console.log(add5(2)); // 7
// // console.log(add5(3)); // 8
// // console.log(add5(4)); // 9
// // console.log(add5(5)); // 10
// console.log(add10(2)); // 12
// console.log(add10(3)); // 13
// console.log(add10(4)); // 14


// EXAMPLE 3
// problem: You need to create a function that can make new functions that are able to add an input string
// to an array in the outer function every time the inner function gets called

// Write a function that returns a function that takes a string parameter. The returned function must add the string to an array
// created in the outer function.
// const stringFactory = () => {
//   const strings = []
//   return function (string) { //(closure): snapshot of accessible variables: strings
//     strings.push(string)
//     console.log(strings)
//   }
// }

// const factory1 = stringFactory()
// const factory2 = stringFactory()

// console.log('-----------FACTORY 1 IN PRODUCTION--------------')
// factory1('Hello Jesse')
// factory1('How are you today?')
// console.log('-----------FACTORY 2 IN PRODUCTION--------------')
// factory2('Hello Anthony')
// factory2('I hope you are having a good day')
