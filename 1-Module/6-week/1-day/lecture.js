// Javascript is single threaded

// synchronous code - inherent order

// asynchronous code - there is no order
// message que and event loop
// setTimeOut()
// setInterval()
// fetch()
// new Promise() // class


// setTimeout(cb, delay)

// function add(){
// 	console.log(5 + 5)
// }
// function multiply(){
// 	console.log(5 * 5)
// }


// multiply()
// add()

// setTimeout(()=> {
// 	console.log('I love javascript')
// }, 500)

// setTimeout(()=> {
// 	console.log('hello')
// })

//
// let count = 0
// setInterval(()=>{
// 	console.log(count)
// 	count++
// }, 1000) // number is in miliseconds


// const st = setTimeout(()=> {
// 	console.log('Hello World')
// }, 1000)


// console.log(st)

// clearTimeout(st)

// let count = 0
// const si = setInterval(()=>{
// 	console.log(count)
// 	if(count === 5){
// 		clearInterval(si)
// 	}
// 	count++
// }, 1000) // number is in miliseconds

// clearInterval(si)


// let count = 0
// const si = setInterval(()=>{
// 	while(count <=5){
// 		console.log(count)
// 		count++
// 	}
// 	// console.log(count)
// }, 1000)


// Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
// in milliseconds, and an optional amount as arguments. The function should
// set an interval with the given callback and delay. If an amount argument
// is passed, the interval should be cleared after the callback has been
// called 'amount' number of times. If an amount argument is not passed,
// the interval should not be cleared and `dynamicIntervalCount` should instead
// return the Timeout object for the interval.
// In addition to Mocha, we recommend that you test your code manually using
// node with the examples below.

// examples
// dynamicIntervalCount(()=> console.log('hello world'), 1000, 4)
// should print out hello world one each second for 4 times
// dynamicIntervalCount(()=> console.log('hello world'))
// should indefinitely print hello world
// const test = dynamicIntervalCount(()=> console.log('hello world'))
// test = a timeout object

// const dynamicIntervalCount = (cb, ms, amount) => { // ms = miliseconds
// 	let track = 1;
// 	const si = setInterval(()=> {
// 	  if(amount === track){
// 		clearInterval(si);
// 	  }
// 	  cb();
// 	  track++;
// 	},ms)
// 	if(amount === undefined){
// 		return si
// 	}
//   }

// dynamicIntervalCount(() => console.log('hello world'), 1000, 4)
// dynamicIntervalCount(()=> console.log('hello world'), 2000)
// const test = dynamicIntervalCount(()=> console.log('hello world'), 1000)

// console.log(test)


// QUE
// deque remove from the que
// enque adds to the que

// function add(){
// 	console.log(5 + 5)
// }
// function multiply(){
// 	console.log(5 * 5)
// }
// multiply()
// const newArr = [5,3,2,3,1]
// const setRecursion = (arr) => {
// 	if(arr.length === 1) {
// 		setTimeout(()=>{
// 			console.log(arr[0])
// 		}, arr[0] * 1000)
// 		return
// 	}
// 	setTimeout(()=> {
// 		console.log(arr[0])
// 	}, arr[0] * 1000)
// 	return setRecursion(arr.slice(1))
// }
// add()
// setRecursion(newArr)
// setTimeout(()=>{
// 	console.log('Hello World')
// }, 9000)
