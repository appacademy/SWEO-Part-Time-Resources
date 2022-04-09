/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
restSum(0); // => 0
***********************************************************************/

// REST is always in the function parentheses
function restSum(...nums) {
  // returning sum, so create accumulator
  let sum = 0;

  // nums is an array, so loop over array 
  for (let i = 0; i < nums.length; i++) {
		// save each number to variable
		let currentNumber = nums[i];
		// add each val to sum
    sum += currentNumber;
  }

  return sum;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;
