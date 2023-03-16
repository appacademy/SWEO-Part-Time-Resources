// Sets
// are an abstract data structure in CS(computer science)
// they are a type of data that stores "unique" and unordered values

// Properties of a set:
// 1. a set cannot include duplicate elements
// 2. they are unordered
// 3. Searching in a set is constant time, adding is constant time
// deleting is constant time

// a set is an abstract data type its just an idea of how to structure
// the data

// that means in other programming languages there are many ways to implement
// a set

const uniqueValues = new Set()
uniqueValues.add(1)
uniqueValues.add(10)
// console.log(uniqueValues)
// console.log(uniqueValues.has(1))
const obj = {'firstName' : 'Alex'}
uniqueValues.add(obj)
// console.log(uniqueValues)

// Caching
// super useful and common method of increasing performance code
// if we an operation/task that is used frequently
// we can run it once, store the result so that any other time it's
// needed we can just look it up in our storage and find the answer
// and we dont run the calculations again.

let log = 0
const cache = {}

const fib = (n) => {
	log++
	if (n === 1) return 0
	if (n === 2) return 1

	// return fib(n - 1) + fib(n - 2)
	cache[n] = cache[n] || fib(n-1) + fib(n-2)
	return cache[n]
}
// fib(5) // 9 -> 7
// fib(6) // 15 -> 9
// fib(7) // 25 -> 11
// fib(30) // 1664079 -> 57
// fib(100) // 197
// console.log(log)

// Memoization
// caching from top to bottom
// fib(5)
// memo = {}
// memo[fib(4) + fib(3)]
// memo[fib(3) + fib(2)]
// memo[fib(2) + fib(1)]

// Tabulation
// from bottom to top
// fib(5)
// tab = {}
// memo[fib(2) + fib(1)]
// memo[fib(3) + fib(2)]
// memo[fib(4) + fib(3)]

// they are both forms of dynamic programming
// it involves caching sub problems to make future calculations faster

// these are forms of caching

// Things to study for the assessment
// 1. determining space and time complexity, optimizing code

// 2. Translating hex and binary

// 3. Linked list and methods
