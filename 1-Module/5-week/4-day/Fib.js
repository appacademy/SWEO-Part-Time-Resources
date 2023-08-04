/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:
n           = 0  1  2  3  4  5  6
should return 0, 1, 1, 2, 3, 5, 8, 

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:
***********************************************************************/

function fibonacci(n) {
	if (n === 0) return 0
	if (n === 1 || n === 2) return 1
	return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(10)); // 55

