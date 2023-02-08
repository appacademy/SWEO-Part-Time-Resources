// Javascript Runtime
// JS is single thread
// it runs from top to bottom

// Heap -- variables, global variables, global object, functions, initialzied vars, arrays, objects

// Call Stack -- function invocation
// first in last out

// Queue -- asynchronous, promises, apis, settimeout, setintervals



// function forLoop(){
// 	debugger
// 	for(let i = 0; i < 5; i++){
// 		innerLoop()
// 	}
// }

// function innerLoop(){
// 	debugger
// 	for(let j = 0; j < 2; j++){
// 		innerMostLoop()
// 	}
// }

// function innerMostLoop(){
// 	debugger
// 	for(let k = 0; k < 2; k++){
// 		console.log(k)
// 	}
// }

// forLoop()

// Recursion
// What is recursion
// recursion is the act of a function calling itself

// there are 2 or 3 parts to recursion

// Base Case -- is a case in which we stop our function
// and return the value that we're looking for
// Recursive Step/Recursive Case

// let i = 0
// function hello(){
// 	debugger
// 	i++
// 	console.log(i)
// 	hello()
// }

// hello()

// function countdown(n){
// 	debugger
// 	if(n === 0) return 'Countdown finished' // base case
// 	n-- // recursive step
// 	return countdown(n)
// }

// console.log(countdown(3))

// 1 1 2 3 5 8 13 21
// 0 1 2 3 4 5 6  7
function fibonacci(n){
	if(n < 2) return 1

	return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(7))
