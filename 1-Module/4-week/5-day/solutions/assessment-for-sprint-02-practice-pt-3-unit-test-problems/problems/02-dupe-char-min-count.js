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
	const countOfChars = {};

	for (let i = 0; i < string.length; i++) {
		let char = string[i];

		if (countOfChars[char] === undefined) {
			countOfChars[char] = 1;
		} else {
			countOfChars[char]++;
		};
	};

	return countOfChars;
};

function duplicateCharMinCount(string, minCount) {
	const countOfChars = countCharacters(string);
	const res = [];

	for (let key in countOfChars) {
		if (countOfChars[key] >= minCount) {
			res.push(key);
		};
	};

	return res;
};

// console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;