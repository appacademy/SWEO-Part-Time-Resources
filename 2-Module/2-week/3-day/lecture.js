// Types of errors Javascript

// 3 common type of errors

// Syntax Error

// A syntax error is thrown when JS attempts to parse code
// that is syntatically incorrect

// common causes - missing curly braces, missing brackets,
// mispelled keywords

// function test(){
// 	{}
// }

// Reference Error

// when a non existent variable is referenced

// let name = 'Kate'

// console.log(nam) // ReferenceError nam is not defined

// Type Error

// There two common causes
// 1. Operation cannot be performed on the operand

// ex:
// let x = 'string'
// x() // TypeError x is not a function

// 2. Attempting to modify a value that cannot be changed

// const test = true
// test = false // TypeError assignment to a constant variable

// Error Handling

// keywords
// 'try', 'catch', 'finally'

// syntax
let name1 = 'Kate'
let name2 = 'Alex'
let name3 = 'Krystal'
let name4 = 'Marcus'


// function errorHandler(arg){
// 	try {
// 		console.log(arg)
// 	}
// 	// paramaters commonly seen in catch(e), catch(err), catch(error)
// 	catch(err) { // will only trigger if an error is thrown in try
// 		console.log('err = ', err)
// 		console.log('OOPS something broke within our code')
// 	}
// }

// const inputArray = [name1,name2,name3,name4]

// for(let i = 0; i < inputArray.length; i++){
// 	errorHandler(inputArray[i])
// }

// console.log('MY CODE IS STILL RUNNING')

// try {
// 	console.log(arg)
// }
// // paramaters commonly seen in catch(e), catch(err), catch(error)
// catch(err) { // will only trigger if an error is thrown in try
// 	console.log('err = ', err)
// 	console.log('OOPS something broke within our code')
// }

// syntax
// try {

// } finally {

// }

// syntax

// try {
// 	// name1()
// 	console.log(name1)
// 	console.log(name2)
// 	console.log(name)
// 	console.log(name3)
// }
// catch (e) {
// 	console.log(e)
// }
// finally {
// 	console.log('I will trigger regardless of what happens')
// }

// Custom Errors
// Syntax
// new Error()
// new Error('error message', optional('Filename', 'line Number'))

// throw

// function checkIfPasswordsMatch(password, matchedPassword){
// 	if (password === matchedPassword){
// 		console.log('Passwords Match')
// 	} else {
// 		throw new Error('THEY DO NOT MATCH')
// 	}
// }

// try {
// 	checkIfPasswordsMatch(1234, 1234)
// } catch(e) {
// 	console.log(e)
// }

// Testing Pyramid

// E2E - 'end to end' tests the entire application from top to bottom
// Integration testing - test the interaction between different parts
// 2 pieces
// Unit testing - test one piece of code. The backbone of testing

// TDD
// Test Driven Development

// Why do we test?
// make sure it works!
// Keps code consistent and helps engineers work together

// Write test, and then we write code to pass those tests

// RED - tests are failing
// GREEN - tests are passing
// Refactor/Yellow - Make it readable, maintanable and understandable.
