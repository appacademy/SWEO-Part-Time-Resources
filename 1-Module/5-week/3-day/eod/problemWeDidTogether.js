/***********************************************************************
Write a more advanced version of the recursive `exponent` function that
you just wrote. Instead of multiplying the base number by itself n power of
times, like you did previously, you will be squaring the results of the base
number raised to the power of half of n power.

The following is math, not JavaScript:

exponent(b, 0) // 1
exponent(b, 1) // b
exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]

You will need to square the results of exponent(b, n / 2) and
(exponent(b, (n - 1) / 2).

Remember that you don't need to do anything special to square a number, just
calculate the value and multiply it by itself. So don't cheat and use
exponentiation in your solution.

Examples:

For each of the examples above, figure out how many times your code should
be recursively calling `advancedExponent`. Find a way to visually see how many
times `advancedExponent` is being recursively called.
***********************************************************************/

let advancedExponent = (b, n) => {
  // base case = n === 0 return 1
  // check if n is even, if it is use the recursive step provided, then square the result
  // if n is odd, use the recursive step provided, then square the result, and multiply that by b

  // every time this function is called, it's going to stop on the line where it calls itself, and wait
  // for a return value before it moves to the next line of code.
  // on the fourth function call, we finally get a return value (1) and then it uses that return value
  // as the value of the variable we created to be equal to the return of that function call, then it
  // moves to the next line of code and uses that return for the previous function calls over and over 
  // until we get to the original function call.

  // read the returns from bottom to top, because it is working it's way from the 4th function call
  // back to the first once it finally gets a return value that isn't calling itself again.
  
  // b is 2, n is 4
  // first function call n = 4 // n was even so it starts on line 21 and returns 16 (4 * 4)
  // second function call n = 2 // n was even, so it starts on line 21 and returns 4 (2 * 2)
  // third function call n = 1 // n was odd so it starts on line 55, and returns 2 (2 * (1 * 1))
  // fourth function call n = 0 // function gets a real return, 1 

  if (n === 0) return 1;

  if (n % 2 === 0) {
    let evenResult = advancedExponent(b, n / 2);

    return evenResult * evenResult;
  } 

  if (!n % 2 === 0) {
    // when n was 1, it came here and stopped on this line
    let oddResult = advancedExponent(b, (n - 1) / 2)

    return b * (oddResult * oddResult)
  }
}


// console.log(advancedExponent(2, 0)); // 1
// console.log(advancedExponent(2, 1)); // 2
// console.log(advancedExponent(2, 2)); // 4
// console.log(advancedExponent(2, 3)); // 8
console.log(advancedExponent(2, 4)); // 16
// console.log(advancedExponent(2, 5)); // 32
// console.log(advancedExponent(2, 6)); // 64
// console.log(advancedExponent(2, 7)); // 128
// console.log(advancedExponent(2, 8)); // 256
// console.log(advancedExponent(2, 9)); // 512
// advancedExponent(2, 10); // 1024
// advancedExponent(2, 11); // 2048
// advancedExponent(2, 12); // 4096