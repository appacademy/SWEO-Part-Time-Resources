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

// const uniqueValues = new Set()
// uniqueValues.add(1)
// uniqueValues.add(10)
// // console.log(uniqueValues)
// // console.log(uniqueValues.has(1))
// const obj = {'firstName' : 'Alex'}
// uniqueValues.add(obj)
// console.log(uniqueValues)

// Caching
// super useful and common method of increasing performance code
// if we an operation/task that is used frequently
// we can run it once, store the result so that any other time it's
// needed we can just look it up in our storage and find the answer
// and we dont run the calculations again.

// let log = 0
// const cache = {}

// const fib = (n) => {
// 	log++
// 	if (n === 1) return 0
// 	if (n === 2) return 1

// 	// return fib(n - 1) + fib(n - 2)
// 	cache[n] = cache[n] || fib(n-1) + fib(n-2)
// 	return cache[n]
// }
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
// 1. determining space and time complexity, optimizing code and using sets

// 2. Translating hex and binary

// 3. Linked list and methods

// const arr = [1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,10,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,
// 	1,2,3,2,2,2,2,1,1,1,1,4,4,6,7,8,8,8,9,9,10,11]

// console.log(arr.length)
// const newSet = new Set(arr)

// console.log(newSet)

// console.log(newSet.has(10))

// hashTable = [null,null,null,null,null,null,null,null,null,null]
// newSett.add(2) // will add that bucket to the hashtable
// newSett.add(2) // hash collision occurs but sets will just ignore it
// newSett.add(2) // hash collision occurs but sets will just ignore it
// hashMod(2) // index --> 10
// newSet.has(10)

const data = [
	{
		'name' : 'alex',
		'purchased' : true
	},
	{
		'name' : 'kate',
		'purchased' : false
	},
	{
		'name' : 'nathan',
		'purchased' : true
	},
	{
		'name' : 'myles',
		'purchased' : false
	}
]

// const newSet = new Set(data)
// console.log(newSet)

const purchasedOnly = data.filter(e => e.purchased === true)

// console.log(purchasedOnly)

const colors = [
	'green',
	'blue',
	'light blue',
	'dark blue',
	'dark blue',
	'blue'
]

const newSett2 = new Set(colors)
console.log(newSett2)
