/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.
 
See below for examples

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
***********************************************************************/

// write a function that takes an object, a key, and a value,
// create a variable that is a boolean indicating weather or not the value exists
// create an empty array 
// loop through the object, and push each value into a new array
// create a variable the is equal to each value
// loop through that new array, and see if any element matches the passed in value
// create a variable for each element in isolation 
// if so, set my boolean variable from above to true.
// after all of my looping im going to check if my boolean is false, 
// if so i am going to create an entry in my object[passed in key] = passed in value
// return object 
function keyAdderUniqueVal(object, key, value) {
	// let myValues = Object.values(object)
	// solving using indexof
	// if(myValues.indexOf(value) === -1){
	// 	object[key] = value
	// }


	// solving using includes
	// if(!myValues.includes(value)){
	// 	object[key] = value
	// }
	// return object


	// solving using classic array manipulation
	let doesExist = false
	let myValues = []
	for(let key in object){
		let value = object[key]
		myValues.push(value)
	}
	// console.log(myValues)
	for(let i = 0; i < myValues.length; i++){
		let myElement = myValues[i]
		if(myElement === value){
			doesExist = true
		}
	}
	if(!doesExist){
		object[key] =value
	}
	return object
}
let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;