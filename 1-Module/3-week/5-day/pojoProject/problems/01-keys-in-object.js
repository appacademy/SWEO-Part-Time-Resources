/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns 
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

// Object.keys
function keysInObject(obj) {
	// Object.keys gives me an array of all the keys
	return Object.keys(obj)
}

// // for in loop
// function keysInObject(obj) {
// 	let finalArr = [];

// 	// for in loop takes each key in the object
// 	for (let key in obj) {
// 		// push the key in the array
// 		finalArr.push(key)
// 	}
//	return finalArr
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
