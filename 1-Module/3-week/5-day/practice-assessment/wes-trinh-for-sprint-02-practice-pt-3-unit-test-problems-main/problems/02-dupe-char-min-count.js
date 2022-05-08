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
// countCharacters allow us to track the letters and amount of letters in an object
function countCharacters(string) {
	//create obj to keep count of letters
	let countObj = {};
	//iterate through the string and get the letter
	for(let i=0; i<string.length; i++){
		let letter = string[i];
		//if letter exists in countObj
		//if(countObj[letter] !== undefined)
		if(letter in countObj){
			//add one to it
			countObj[letter] += 1;
		}
		//if it doesn't exist in countObj
		else{
			//set it initially to = 1
			countObj[letter] = 1;
		}
	}
	return countObj;
}

// console.log(countCharacters("apple"));

function duplicateCharMinCount(string, minCount) {
	//define an result arr
	let resArr = [];
	//define object after applying helper
	let countObj = countCharacters(string);
	// console.log("countObj:", countObj)

	//iterate through the object to get each letter (key) and its corresponding number (value)	
	for(let letterKey in countObj){
		let numValue = countObj[letterKey];
		//if numValue is at least the minCount, then add letter to result array.
		if(numValue >= minCount){
			resArr.push(letterKey);
		}
	}
	return resArr;

}
console.log(duplicateCharMinCount("apple", 2)) // ["p"]
console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
