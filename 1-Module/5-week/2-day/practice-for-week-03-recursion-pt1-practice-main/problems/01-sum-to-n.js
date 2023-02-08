/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/


function sumToN(n) {
	debugger
	if(n < 0) return null // base case
	if(n === 1) return 1 // base case
	// n = n - 1
	return n + sumToN(--n)// recursive step/case
}

// console.log(sumToN(1))  // returns 1
// console.log(sumToN(-8))  // returns null
console.log(sumToN(5)) // returns 15

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
