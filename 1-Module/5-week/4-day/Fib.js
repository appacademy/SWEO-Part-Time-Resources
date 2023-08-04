/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:
n = 0, 1, 2, 3, 4, 5, 6, 7,  8,  9,  10, etc
val=0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, etc....
***********************************************************************/

function fibonacci(n) {
	debugger
	if (n === 0) return 0
	if (n === 1) return 1
	
	return fibonacci(n - 1) + fibonacci(n - 2)
}

// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(6)); // 8
// console.log(fibonacci(7)); // 13
// console.log(fibonacci(8)); // 21
// console.log(fibonacci(9)); // 34
console.log(fibonacci(10)); // 55
