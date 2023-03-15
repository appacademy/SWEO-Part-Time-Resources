// SET
// in CS(computer science) is an abstract data type that stores
// "unique" and uordered values

// Properties of a set:

// 1. A set cannot contain duplicate elements
// 2. The elements in a set are unordered
// 3. Searching a set is always constant time

// const uniqueElements = new Set()
// uniqueElements.add(1)
// uniqueElements.add(1)
// uniqueElements.add(2)
// uniqueElements.add(3)
// uniqueElements.add(4)
// // console.log(uniqueElements)

// const obj_ = {'firstName' : 'Kate'}
// const obj_2 = {'firstName' : 'Kate'}

// uniqueElements.add(obj_)
// // uniqueElements.add(obj_2)
// uniqueElements.add(obj_)
// console.log(uniqueElements)
// console.log(uniqueElements.has(5))
// console.log(uniqueElements.has(obj_))

// Caching
// Is the idea of using up memory to increase performance
// such as speed and efficiency
// It reduces redundant processes
// it does not need to recalculate any sort of commands
// Its super useful and its common in code to increase performance

// If we have an operation that is used frequently
// we can run it once, and then store that result so that any other time
// its needed we can just look up at that stored data
// and then return up the answer so that we don't need
// to run the operation/calculations again

const log = {}

// const fib = (n) => {
// 	// log[n] = log[n] + 1
// 	if(n < 2) return n
// 	return fib(n-1) + fib(n-2)
// }

let sum = 0
const cache = {}

function fibPrint(n) {
	// console.log(`Running fib(${n})`);
	sum++
	if (n === 1) return 0;
	if (n === 2) return 1;

	// return fibPrint(n-1) + fibPrint(n-2);
	cache[n] = cache[n] || fibPrint(n-1) + fibPrint(n-2)
	return cache[n]
}

// fib(5)
// fibPrint(7) // without caching 25 operations, with caching operations went down to 11
// fibPrint(5000) // 1664079 -> 57
// console.log(sum)

// Object.values(log).forEach((el, index)=> console.log(`fib was called ${index + 1}`))

// Memoization
// Memo goes from top to bottom in terms of storing that data
// Example: fib(5)
// memo = {}
// memo[fib(4) + fib(3)]
// memo[fib(3) + fib(2)]
// memo[fib(1) + fib(2)]

// Tabulation
// same as memo
// but from bottom to top
// Example: fib(5)
// tab = {}
// tab[fib(1) + fib(2)]
// tab[fib(3) + fib(2)]
// tab[fib(4) + fib(3)]

// these are both forms of dynamic programming
// that involves caching sub problems to make future calculations
// faster

// these are both forms of caching
