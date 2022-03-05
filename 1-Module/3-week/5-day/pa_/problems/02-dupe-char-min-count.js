/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	// Your code here
	let obj = {}

	for(let i = 0; i < string.length; i++){
		let currentChar = string[i]

		if(obj[currentChar]){
			obj[currentChar] += 1
		} else {
			obj[currentChar] = 1
		}
	}

	return obj
}

function duplicateCharMinCount(string, minCount) {
	// Your code here
	let result = []

	let obj = countCharacters(string)

	for(let key in obj){

		let value = obj[key]

		if(value >= minCount){
			result.push(key)
		}
	}

	return result
}

console.log(duplicateCharMinCount("apple", 2)) // ["p"]
console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
