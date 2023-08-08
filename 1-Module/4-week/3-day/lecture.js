// let func = function(firstArg) {
// 	console.log(firstArg)
//     return (function(secondArg) {
//         console.log(firstArg(secondArg));
//     });
// };

// let triple = function(num) {
//     return num * 3;
// }


// func(triple)(9)


// Scope
// Who has access to the variables


// there are three kinds of scope in javascript

// Global, Block, Local

// Global
// The widest scope
// It is visible to all of its inner scope


// Block
// {}
// if conditionals, else conditionals, for, while, switch case

// let pet = 'parrot'

// if(true){
// 	let pet = 'dog'
// 	console.log(pet)
// }

// console.log(pet)

// Local
// variables that are only available inside of a given function

// const name = 'Global'

// function printName(){
// 	const name = 'alex'
// 	console.log(name)
// }

// function printName2(){
// 	const name = 'bill'
// 	console.log(name)
// }


// printName()
// printName2()
// console.log(name)

// Scope Chaining
// our inner scopes have access to all outer scope variables but our
// outer scope variables don't have access to inner variables

// const lastName = 'betita'

// function printFullName(){
// 	const name = 'alex'
// 	console.log(name + ' ' + lastName)
// }

// printFullName()

// console.log(name + ' ' + lastName)

// Lexical Scope
// When we run a piece of JS code, we parse the data and we can determine the outcome
// before we even run the code.


// const lastName = 'betita'

// if(true){
// 	const name = 'alex'
// }

// console.log(name + ' ' + lastName)

// the lexical scope is determined during lexical time.
// that just means we can determine the outcome without running the code

// function inner() {
// 	let str = "hello";
// 	return str;
//   }

//   function outer() {
// 	let test = inner();
// 	return test;
//   }

// let result1 = outer();

// result2 = inner();

// // without declaring a keyword for a initializing a variable
// // the variable will default to local scope declaration

// console.log(result1 === result2) // ???


// Variables in javascript and their scopes

// Var is function scope or global scope

// function func1(){
// 	// var pet = undefined
// 	console.log(pet)

// 	var pet = 'cat'
// }

// Temporal Dead Zone
// the time before let and const is declared

// function func1(){
// 	console.log(pet)

// 	const pet = 'cat'
// }

// func1()

// let and const
// are block scope


// Hoisting
// Is a mechanism used by JS to move variables and functions declaration to the top of their
// scope before execution


// function test(){
// 	console.log('hello world')
// }

// const test = () => console.log('hello world')

// function test(){
// 	console.log('hello world')
// }

// function test(){
// 	console.log('alex')
// }

// var pet; // undefined

// var pet = 'bird'
// var pet = 'dog'

// test()

// console.log(pet)


// CLOSURE
// A closure is an inner function USES or CHANGES a variable or variables from
// an outer function



// outer(5)


// Closure rules
// Closure have access to any variable outside of its own scope
// as well as any variable in any outer functions scope
// when a closure is declared

// PRIVATE STATE
// its very important to hide information in SE
// in Javascript we can't declare private variables
// so we have to use closures


// function createCounter(){

// 	let count = 0;

// 	return function(){
// 		count++
// 		return count;
// 	}
// }


// let counter = createCounter()

// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

// const puppy = "Spot";
// puppy = "Rover";
