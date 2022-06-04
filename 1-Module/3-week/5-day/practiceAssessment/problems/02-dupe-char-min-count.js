/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:


***********************************************************************/

function countCharacters(string) {
	// Your code here
	// let result = {};

	// for (let i = 0; i< string.length; i++){
	// 	if (result[string[i]] === undefined){
	// 		result[string[i]] = 1;
	// 	} else {
	// 		result[string[i]]++
	// 	}
	// } 
	// return result

	let chars = string.split('');

	let count = chars.reduce(function(accum, char){
		if (accum[char] === undefined){
			accum[char] = 1;
		} else {
			accum[char]++
		}
		return accum;
	}, {})

	return count
}

function duplicateCharMinCount(string, minCount) {
	// Your code here
	
	let result = countCharacters(string)
	let res = [];
	
	
	for (let key in result){
		if (result[key] >= minCount){
			res.push(key);
		}
	}
	return res
}

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
