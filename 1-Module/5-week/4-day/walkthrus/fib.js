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

let fibonacci = (n, fib = [0,1]) => {
  // if my n === 0; return fib;
  // push the result of first num and second num into the array n amount of times to get the numbers
  // i need
  // return the nth index of that array to get the correct number.
  debugger
  if (n === 0) return fib;

  fib.push(fib[fib.length - 2] + fib[fib.length - 1])
  fibonacci(n - 1, fib);
  return fib[n];

}

// let fibonacci = (n) => {

//   if (n === 1 || n === 2) return 1;

//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

// function fibonacci(n) {
//   // Your code here
//   if (n==0)
//     return 0
//   else if(n==1)
//     return 1
//   else{
//     debugger
//     return fibonacci(n-1)+fibonacci(n-2)
//   }
// }


  
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
console.log(fibonacci(10)); // 55
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
  