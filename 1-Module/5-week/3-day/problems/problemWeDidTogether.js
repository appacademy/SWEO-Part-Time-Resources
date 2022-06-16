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

let advancedExponent = (b, n, count = 0) => {

  // first function call b = 2 and n = 4
  
  if (n === 0) {
    count++
    console.log(count)
    return 1;
  }

  // first function call n = 4 // 16
  // second function call n = 2 // 4
  // third function call n = 1 // 2
  // fourth function call n = 0 // 1

  if (n % 2 === 0) {
    count++
    let evenResult = advancedExponent(b, n / 2, count);
 
    return evenResult * evenResult
  }

  if (!n % 2 === 0) {
    count++
    let oddResult = advancedExponent(b, (n - 1) / 2, count)
    
    return (oddResult * oddResult) * b
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