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

// object.values
// object.keys
// object.entries

function keyAdderUniqueVal1(object, key, value) {

	let uniqueValues = [];
	let isUniqueValue = true;

	for(let key2 in object){

		let valueInObject = object[key2]
		uniqueValues.push(valueInObject);
	}

	for(let i = 0; i < uniqueValues.length; i++){
		let currentValue = uniqueValues[i]

		if(currentValue === value){
			isUniqueValue = false
		}
	}

	if(isUniqueValue){
		object[key] = value
	}

	return object
}

function keyAdderUniqueVal(object, key, value){
	// { name: 'Willie', color: 'orange' }
	// let values = Object.values(object) // [Willie, orange]

	// if(!values.includes(value)){
	// 	object[key] = value
	// }

	// return object

	let values = Object.values(object) // [Willie, orange]

	if(values.indexOf(value) === -1){
		object[key] = value
	}

	return object

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
