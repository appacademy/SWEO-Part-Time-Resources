/***********************************************************************
Write a recursive function called `factorial` that takes an integer, `num`,
and returns the factorial of `num`. Assume the value of `num` is greater 
than or equal to 1.

A factorial is the number get when multiplying a number by itself minus one
all the way down to 1 (but not 0)! We represent them with an exclamation
point, also sometimes called a "bang" in programming.

5! = 5 x 4 x 3 x 2 x 1 = 120

Examples:

***********************************************************************/

let factorial = n => {
  // base case n === 1 return 1
  // invoke factorial with n - 1, and multiply that by whatever n is on that function call

  if (n === 1) return 1;

  return factorial(n - 1) * n

  // first call n = 5 // 120
  // second call n = 4 // 24
  // third call n = 3 // 6 
  // fourth call n = 2 // 2
  // fifth call n = 1 // 1
}
  

// console.log(factorial(1)); // 1
// console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = factorial;
  