/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45

***********************************************************************/
// base case
// it is when our recursive steps end and stops recursing

// sumToN(-8)  // returns null
// sumToN(0) // return 0
// sumToN(1) // retun 1

// recursive case
// is to recurse and reach our base case

function sumToN(n) {
	// base case
	if(n < 0){
		return null
	}

	if(n === 0){
		return 0
	}

	// recursive step
	return n + sumToN(n-1)
}

console.log(sumToN(5))

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
