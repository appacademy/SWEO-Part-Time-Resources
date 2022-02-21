/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.
 
Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]

write a function that takes a string and a minimum count
create a result array
create a variable that is equal to an empty object 
create a variable that is = to the split(on an empty string) of the passed in string
[a,p,p,l,e]
loop through my split array
create a variable that is equal to the current element in that array 
check if the key of the current element is in my object
if it is not then create it and set it equal to one
if it is update it using ++

loop through my object
set a variable to the current value  // number
if the value is  >= the minCount push the key into the result array
return my results array 

***********************************************************************/
function countCharacters(string, letter) {
	let myNumber = 0
	for(let i = 0; i < string.length; i++){
		let myLetter = string[i]
		console.log(letter, string, 'inside my helper function function')
		if(myLetter === letter){
			myNumber ++
		}
	}
	return myNumber
}
function duplicateCharMinCount(string, minCount) {
	let myResult = []
	let myObj = {}

	// for(let i = 0; i < string.length; i++){
	// 	let myLetter = string[i]
	// 	console.log(myLetter, string, 'inside my main function')
	// 	if(myObj[myLetter] === undefined && countCharacters(string, myLetter) >= minCount){
		
	// 		myObj[myLetter] = countCharacters(string, myLetter)
	// 	}
	// }
	// return Object.keys()



	// all in one function solution 
	let myStringArray = string.split('')
	for(let i = 0; i < myStringArray.length; i++){
		let myCurrentElement = myStringArray[i]
		if(!(myCurrentElement in myObj)){
			myObj[myCurrentElement] = 1
		}else{
			myObj[myCurrentElement] ++
		}
	}
	console.log(myObj)
	for(let key in myObj){
		let myValue = myObj[key]
		if(myValue >= minCount){
			myResult.push(key)
		}
	}
	return myResult
}

console.log(duplicateCharMinCount("apple", 2)) // ["p"]
console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;