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
	const charactersObj = {}
	const characters = string.split('') // [a,p,p,l,e]

	for(let i = 0; i < characters.length; i++){
		const char = characters[i]

		if(charactersObj[char] === undefined){
			charactersObj[char] = 1
		} else {
			charactersObj[char] += 1
		}
	}

	return charactersObj
}

function duplicateCharMinCount(string, minCount) {
	const object = countCharacters(string)
	const arr = []
	for(let [key, value] of Object.entries(object)){
		if(value >= minCount) arr.push(key)
	}
	return arr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
