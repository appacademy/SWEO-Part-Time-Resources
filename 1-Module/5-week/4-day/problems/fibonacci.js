/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:


***********************************************************************/

let fibonacci = (n, fib = [0, 1]) => {
  // base case n === 0 return fib;
  // add the second to last ele to the last ele and push that result into fib arr
  // recursively call the function n times
  // return the item in the fib array at the n'th index
  debugger
  if (n === 0) return fib;

  fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
  fibonacci(n - 1, fib);
  return fib[n];
}

// const fibonacci = n => {

//   if (n === 1 || n === 2) return 1;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
  
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
console.log(fibonacci(10)); // 55
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
  