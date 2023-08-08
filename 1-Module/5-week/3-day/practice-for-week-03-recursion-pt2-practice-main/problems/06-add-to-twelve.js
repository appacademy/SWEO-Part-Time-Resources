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


// function addToTwelve(arr) {

// 	// [1, 3, 4, 7, 5]
// 	// arr[0] 1, arr[1] 3

// 	// [3,4,7,5]
// 	// arr[0] 3, arr[1] 4

// 	// [4,7,5]
// 	// arr[0] 4, arr[1] 7

// 	// [6, 5]
// 	// arr[0] 7, arr[1] 5

// 	// [5]
// 	// arr[0] 5, arr[1] ??
// 	console.log(arr[0], 'arr[0]')
// 	console.log(arr[1], 'arr[1]')
// 	if(arr.length < 2) return false // base case
// 	if(arr[0] + arr[1] === 12) return true // base case



// 	return addToTwelve(arr.slice(1))
// }

// function addToTwelve(arr) {
// 	if(arr.length === 0){
// 	  return false;
// 	}
// 	// next need to identify adjacent numbers in array
// 	let firstEl = arr[0]
// 	console.log(firstEl)
// 	let restEl = arr.slice(1)
// 	console.log(restEl)
// 	return (12 - firstEl )
//   }

function addToTwelve(arr) {
	if(arr.length === 0){
	  return false;
	}
	// next need to identify adjacent numbers in array
	else{
		let firstEl = arr[0]
		// console.log(firstEl)
		let restEl = arr.slice(1)
		// restEl[0] === arr[1]
		// console.log(restEl)
		return ((firstEl + restEl[0] === 12) || addToTwelve(restEl))
	}
}

// console.log(addToTwelve([1])); // false

// console.log(addToTwelve([1, 3, 4, 7, 5])); // true

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
