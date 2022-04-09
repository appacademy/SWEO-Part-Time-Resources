/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0
***********************************************************************/

// your code here!
// (3,5,6)
const arrowRestSum1 = (...rest) => { // rest = [3,5,6]
	return rest.reduce((acc, cur) => acc + cur, 0) //1st: acc = 0, cur = 3, 2nd: acc = 3, cur = 5
												  //3rd: acc = 8, cur = 6:
												  //res = 14
}

// const arrowRestSum = (...rest) => { // rest = [3,5,6]
// 	let res = [...rest] // [3,5,6]
// 	console.log(res, '= res')
// 	return res.reduce((acc, cur) => {
// 		console.log(acc, '= acc')
// 		console.log(cur, '= cur')
// 		console.log('return = ', acc + cur)
// 		return acc + cur
// 	},0) // initial variable
// }

const arrowRestSum = (...rest) => {
	let sum = 0;
	for(let i = 0; i < rest.length; i++){
		let element = rest[i]
		sum += element
	}
	return sum
}

arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  return undefined;
}
