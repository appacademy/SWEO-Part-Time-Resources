// Default Parameters

function exponent(num, power = 1, stacks = [`stack frame 1`]) {
  // console.log(stacks);
  if (power === 0) return 1;
  return num * exponent(num, power - 1, stacks.concat([`stack frame ${stacks.length + 1}`]));
}
// exponent(2, 3); <--- stack frame notes


// console.log(exponent(2, 0)); // 1
// console.log(exponent(2, 1)); // 2

// console.log(exponent(3, 2)); // 9
// console.log(exponent(5, 5)); // 3125

// console.log(exponent(2)); // 2
// console.log(exponent(3)); // 3


/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

understand
  inputs: n (int)
  outputs: the nth number in the fib sequence 
    [0,1,1,2,3,5,8,...] each number is the sum of the previous 2 nums

plan
  base case(s): 
    if (n === 1) return 1;
    if (n === 2) return 1;
  recursive case(s):
    return fibonacci(n - 1) + fibonacci(n - 2);
  arg change:
    n - 1 
    n - 2

Examples:

fibonacci(1); // 1
fibonacci(2); // 1

fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

function fibonacci(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;

  return fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
}

function crazyFibonacci(n, memo = []) {
  if (memo[n]) return memo[n];
  
  if (n === 1) return 1;
  if (n === 2) return 1;

  const prevNum1 = fibonacci(n - 1, memo)
  const prevNum2 = fibonacci(n - 2, memo)
  
  memo[n - 1] = prevNum1;
  memo[n - 2] = prevNum2;
  memo[n] = prevNum2 + prevNum1
  
  // console.log(n, memo);
  return memo[n];
}

// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(10)); // 55

// Danger!...
// console.log(fibonacci(100)); // ??
// console.log(fibonacci(1000)); // ???

/***********************************************************************
Write a recursive function called `factorial` that takes an integer, `num`,
and returns the factorial of `num`. Assume the value of `num` is greater 
than or equal to 1.

A factorial is the number get when multiplying a number by itself minus one
all the way down to 1 (but not 0)! We represent them with an exclamation
point, also sometimes called a "bang" in programming.

5! = 5 x 4 x 3 x 2 x 1 = 120
2! = 2 x 1 = 2

understand
  input: num (int)
  output: factorial of num (?)

plan
  base(s): 
    if (num === 1) return 1;
    if (num === 2) return 2;
    ...
  recursive(s): 
    return num * factorial(num - 1)
            5 * 4 * 3 * 2 * 1 
  change(s): 
    num - 1

Examples:

factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
***********************************************************************/

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(1)); // 1
// console.log(factorial(3)); // 6
// console.log(factorial(5)); // 120










/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // Your code here
}

// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
// console.log(flatten([1, [2, [3]]])); // [1, 2, 3]


/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/


function isSorted(arr) {
  // Your code here
}

// console.log(isSorted([1, 2, 3, 4, 5])); // true
// console.log(isSorted([1, 2, 4, 3, 5])); // false
// console.log(isSorted([2, 4, 6, 7, 8])); // true
// console.log(isSorted([5, 4, 3, 2, 1])); // false
