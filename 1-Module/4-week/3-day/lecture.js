// let func = function(firstArg) {
//     return (function(secondArg) {
//         console.log(firstArg(secondArg));
//     });
// };

// let triple = function(num) {
//     return num * 3;
// }

// func(triple)(9)

// const tripleNumber = func(triple)

// tripleNumber(9)


// SCOPE
// Who has access to variables?

// Three kinds of scopes in JS

// Global, Local, Block

// GLOBAL
// visible to all inner scopes
// widest scope


// const name = 'alex'

// console.log(name)

// LOCAL SCOPE
// variables that are only available inside of a function

// the way JS reads variables is from bottom to top
//

// global is an object that holds our reserved names and reserved functions
//

// const name = 'alex'

// function printName(){
// 	// const name = 'bill'

// 	console.log(name)
// }

// printName() // alex

// console.log(name) // alex

// BLOCK SCOPE
// they are denoted by the {}
// like our if, else, else if, while, for, switch

// let pet = 'owl'

// if(true){
// 	let pet = 'dog'
// }

// console.log(pet)

let num1 = 20

// SCOPE Chaining
// Inner scopes have access to all outer scope variables, but outer
// scope variables don't have access to inner scope variables

function addNumbers(){
	// let num1 = 5
	let num2 = 8
	if(true){
		// let num1 = 10
		console.log(num1 + num2)
	}
}

// addNumbers()

// LEXICAL Scope
// scopes in javascript are not dynamic
// we can read our code in real time and determine the outcome of the value
// lexical time = the time for us to read the variables and determine
// the value or the result of the given function


// VARIABLES in JS and there scopes

// Var - function scope or global scope

// Hoisting
// a mechanicsm used by JS to move variables and function delcarations
// to the top of their scope before execution


// printName()

// function printName(){ // function scoped or global scoped
// 	// var name;
// 	var name = 'bill'

// 	if(true){
// 		var name = 'alex'
// 	}

// 	console.log(name)
// }

// const printName = () => {
// 	var name = 'bill'

// 	if(true){
// 		var name = 'alex'
// 	}

// 	console.log(name)
// }

// var pet = 'owl'
// var pet = 'dog'

// let and const
// block scoped

// let is reassignable
// const is not reassignable

// we can't initialze the same variable name
// in the same scope

// const pet = 'owl'
// // const pet = 'dog'

// function getPet(param){ // let variables
// 	const pet = param
// 	// console.log(pet)
// 	if(true){
// 		const pet = 'fish'
// 	}
// 	console.log(pet)
// }

// getPet('lion')

// TEMPORAL DEADZONE
// this only applies to let and const when they are accessed before
// initialization


// console.log(name)

// const name = 'alex'

// CLOSURE
// A closure is an inner functon that USES
// or CHANGES a variable or variables from an outer function


function outer(firstArgument){ // hello
	return function(secondArgument){
		return function(thirdArgument){
			secondArgument = 'learn'
			console.log(`${firstArgument} ${secondArgument} ${thirdArgument}`)
		}
	}
}

// outer('Hello')('World')

// const innerFunction = outer('Hello')

// innerFunction('World')

// outer('I')(' Love')(' Javascript')

// const str = 'hello'
// const str2 = "hello"
// // template literals

// const arr =  ['hello','world']
// const str3 = `${arr}`
// // hello,world
// console.log(str3)


// PRIVATE STATE

function counter(){
	let count = 0

	return function(){
		count++
		return count
	}
}

const addCount = counter()

console.log(addCount)
console.log(addCount())
console.log(addCount())
console.log(addCount())
console.log(addCount())
console.log(addCount())
console.log(addCount())
console.log(addCount())
