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

//in order to solve sumToN(5) we must first solve sumToN(4) and so on...
function sumToN(n) {
  //edge case if n is less than 0
  if(n < 0) return null;

  //base case
  if(n === 0){
    return 0;
  }
  
  //n = 5 // 5 + sumToN(4)
  //n + sumToN(n-1)
  let result = n + sumToN(n-1); // 5 + (4 + 3 + 2 + 1)
  return result
}

console.log(sumToN(0)) // returns 0
console.log(sumToN(5)) // returns 15
console.log(sumToN(1))  // returns 1
console.log(sumToN(9))  // returns 45
console.log(sumToN(-8))  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}