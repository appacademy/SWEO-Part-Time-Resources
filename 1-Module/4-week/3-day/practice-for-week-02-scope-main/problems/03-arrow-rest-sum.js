/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/

// const arrowRestSum = (...nums) => {
// 	let sum = 0;
// 	for(let num of nums){
// 		sum += num
// 	}

// 	return sum
// }

// const arrowRestSum = (...parameter) => {
// 	// let array = parameter;
// 	let sum = 0
// 	// for(let num of nums){
// 	// 	sum += num
// 	// }
// 	for(let i = 0; i < parameter.length; i++){
// 		let arr = parameter[i]
// 		sum += arr // []
// 	}

// 	return sum
// }

const arrowRestSum = (...nums) => nums.reduce((acc, val) => acc + val, 0)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  module.exports = null;
}
