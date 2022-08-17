/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:
make a plan
  base casee -- if our n is < 0 return null
  recursive step -- n - 1
  recursive call/case -- sumToN(n-1)
***********************************************************************/


function sumToN(n) {
  // Your code here
  if(n < 0){
    return null
  }

  return n + sumToN(n - 1)
}

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}