// Javascript runtime
// js is single threaded


// Heap -- reserved keywords, scope variables, global variables, functions

// Call Stack -- function invocations, loops, whiles, conditionals, varibale declarations, initializing

// First In Last Out - FILO

// function hundrenThousandLoops(){
// 	debugger
// 	for(let i = 0; i < 5; i++){
// 		innerLoop()
// 	}
// }

// function innerLoop(){
// 	debugger
// 	for(let i = 0; i < 5; i++){
// 		console.log('Inner loop')
// 	}
// }

// hundrenThousandLoops()

// console.log('function ended')
// Queue -- requests, web apis, set timeouts, asynchronous code, promises


// Recursion
// What is recursion
// Recursion is the act of a function calling itself


// Recursive function are made of 2 or 3 parts

// Base Case -- always has to return and is the default return when we reach the end of the function call
// Recursive Step -- what we need to do inorder to reach our base case
// Recursive Case

// 2 parts
// Base Case
// Recursive Case and Recursive Step

// function countdown(number){
// 	debugger
// 	if (number === 0) {
// 		return 'Countdown Finished'
// 	}// base case

// 	number-- // recursive step
// 	return countdown(number) // recursive case
// }

// console.log(countdown(3))

// if there is no base case
// an error would pop up telling us we've reached our Maximum call stack size exceeded


// 1 1 2 3 5 8 13 21
//   1 2 3 4 5 6  7
// 5
// 4 + 3

// function fibonacci(n){
// 	debugger
// 	if (n < 2){
// 		return 1
// 	}

// 	return fibonacci(n - 1) + fibonacci(n - 2)
// }


// console.log(fibonacci(5))
