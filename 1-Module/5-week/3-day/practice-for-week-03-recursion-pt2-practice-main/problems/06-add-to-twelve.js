/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/
// array - mutable
// the array must at least have two numbers to equal 12 to be true
// else its false

// function addToTwelve(arr) {
// 	if(arr.length < 2) return false // base cases
// 	if (arr[0] + arr[1] === 12) return true // base cases

// 	// [1,6,6] shift
// 	// [6,6] shift
// 	// [6]

// 	// shift? copy? or mutate?
// 	// shift returns the shiftted element
// 	arr.shift() // recursive step
// 	return addToTwelve(arr) // recursive case
// }

function addToTwelve(arr) {
	if(arr.length < 2) return false // base cases
	if (arr[0] + arr[1] === 12) return true // base cases

	// const newArr = arr.slice(1)
	return addToTwelve(arr.slice(1)) // recursive case
}

// console.log(addToTwelve([1])); // false
// console.log(addToTwelve([])) // false
// console.log(addToTwelve([6,6])) // true
// console.log(addToTwelve([1,6,6])) // true

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
