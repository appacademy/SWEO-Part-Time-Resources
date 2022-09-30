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
		let letter = string[i]
		// console.log(letter)
		if(obj[letter] === undefined){
			obj[letter] = 1
		} else {
			obj[letter] += 1
		}
		// if(obj[letter]){
		// 	obj[letter] += 1
		// 	}else{
		// 	obj[letter] = 1
		// 	}
		}
return obj
}
// console.log(countCharacters("apple"))

function duplicateCharMinCount(string, minCount) {
	// Your code here
	let arr = []
	let countedChars = countCharacters(string)

	// console.log(countedChars)
	//push into the array when countedchars for the key is >= mincount
	for (let key in countedChars){
		let value = countedChars[key]
		// console.log(value)
		if(value >= minCount){
			arr.push(key)
		}
	}

	return arr
}

console.log(duplicateCharMinCount("apple", 2)) // ["p"]
console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
