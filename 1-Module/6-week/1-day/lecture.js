// Node
// web browser / web api

// JAVASCRIPT is single threaded in nature.

// SYNCHRONOUS CODE - code that runs in an inherent order


function helloWorld(){
	console.log('Hello World')
}

// helloWorld();

// ASYNCHRONOUS CODE - has no order or order isn't guaranteed

// setTimeOut, setInterval, fetch(), http calls

// setTimeout(cb, time in miliseconds);

// const st = setTimeout(()=>{
// 	console.log('I love javascript')
// }, 2000)

// console.log(st)

// clearTimeout(st)

// setTimeout(()=>{
// 	console.log('I love html')
// }, 4500)


// setTimeout(()=>{
// 	console.log('I love css')
// }, 6000)


// setTimeout(()=>{
// 	console.log('I love python')
// }, 2000)

// The message que and event loop
// the whole run time runtime environment in js
// contains 3 parts
// heap, call stack, que

// let i = 0;
// const setI = setInterval(()=>{
// 	i++
// 	console.log(i)
// 	if(i === 5){
// 		clearInterval(setI)
// 	}
// }, 1000)

// const sayYourName = () => {
// 	console.log('Hi my name is Alex')
// }

// const sayGoodBye = () => {
// 	console.log('Goodbye!')
// }

// const shout = () => {
// 	console.log('Ahhhhhhhhhhhhhhhhh!')
// }

// function batchTimeOuts(cb, miliseconds){

// 	for(let i = 0; i < cb.length; i++){
// 		setTimeout(cb[i], miliseconds)
// 	}
// }

// batchTimeOuts([sayYourName, sayGoodBye, shout], 1000)



/*
Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
in milliseconds, and an optional amount as arguments. The function should
set an interval with the given callback and delay. If an amount argument
is passed, the interval should be cleared after the callback has been
called 'amount' number of times. If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.
*/

// Examples:
// dynamicIntervalCount(()=> {console.log('hello')}, 1000, 2)
// will print hello twice, once each second

// dynamicIntervalCount(()=> {console.log('world')}, 2000)
// will print world indifintely

// function dynamicIntervalCount(cb, delay, amount){
// 	if(amount){
// 		let i = 1;
// 		const interval = setInterval(()=>{
// 			if(i === amount) clearInterval(interval)
// 			i++
// 			cb()
// 		}, delay)
// 	} else {
// 		return setInterval(cb, delay)
// 	}
// }

// dynamicIntervalCount(()=> {console.log('hello')}, 1000, 2)

// dynamicIntervalCount(()=> {console.log('world')}, 2000)



// const testInterval = setInterval(()=> {
// 	console.log('hello')
// }, 1000)

// console.log(testInterval)


// function add(){
// 	console.log(5 + 10) // 15
// }
// function subtract(){
// 	console.log(10 - 5) // 5
// }
// setTimeout(()=>{
// 	for(let i = 0; i < 3; i++){
// 		console.log('Hello World')
// 	}
// }, 1000)
// add()
// setTimeout(()=>{
// 	console.log('dog ruff ruff')
// }, 2000)
// setInterval(()=>{
// 	console.log('I love javascript')
// }, 500)
// subtract()



// setInterval(cb, miliseconds)
