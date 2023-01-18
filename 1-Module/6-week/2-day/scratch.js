//ASYNCHRONOUS PROGRAMMING
//Synchronous code - Is code that has an inherent oder of execution

// console.log(1);
// console.log(2);
// console.log(3);

// function test() {
//     console.log(2);
// }

// console.log(1);
// test()
// console.log(3);

//Asynchronous - is code that has NO GUARANTEED order

//setTimeout() - takes a function and an amount of time to wait before execution
//SYNTAX - setTimeout(function, time in milliseconds)

// setTimeout(() => {
//     console.log("Time is up!");
// }, 1500);

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 1500);

// console.log(3);

//MESSAGE QUEUE AND EVENT LOOP
//Queue data structure - similar to a line or a drive through
//To add to the queue, you must add to the back of the queue (Enqueueing) 
//To remove from the queue you must take from the front, (Dequeueing)

//Three parts to the event loop
//1. Callstack
//2. Message Queue
//3. Heap

//Callstack - For events that are CURRENTLY in progress
//Message Queue - Keeps track of tasks that CANNOT currently be executed
//They will be executed once the current tasks are finished.

//setInterval() - Executes a function every (insert time here) milliseconds (Also delays first execution)
//clearInterval() - stop function execution

// let counter = 10;

// let counterGuy = setInterval(() => {
//     console.log(counter);
//     counter--;
//     if (counter === 0) {
//         console.log("Happay birthday");
//         clearInterval(counterGuy);
//     }
// }, 900);

/*
//            Batch Timeout
Write a function, `batchTimeouts`, that accepts an array of callbacks and an
array of delays in milliseconds. The function should set a timeout for each
callback in the array with its corresponding delay. For example, the
callback at index 0 should be set with the delay at index 0,
the callback at index 1 should be set with the delay at index 1, and so on.
The `batchTimeouts` function should return an array containing the Timeout
objects for each timeout that was set. You may assume that both array arguments 
have the same length.

Example:
const sayHello = () => console.log('hi');
const sayGoodbye = () => console.log('bye');
const shout = () => console.log('WHAT?');
const tasks = [sayHello, sayGoodbye, shout];
const delays = [500, 200, 900];
const timeoutObjs = batchTimeouts(tasks, delays); 
// should print: 
//  'bye' after 200 ms
//  'hi' after 500 ms
//  'WHAT?' after 900 ms
console.log(timeoutObjs); // [ Timeout {...},  Timeout {...}, Timeout {...} ]
*/

// function batchTimeouts(callbacks, delays) {
//     return callbacks.map((cb, index) => {
//         return setTimeout(cb, delays[index])
//     })
// }


/*
Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
in milliseconds, and an optional amount as arguments. The function should 
set an interval with the given callback and delay. If an amount argument 
is passed, the interval should be cleared after the callback has been 
called 'amount' number of times. If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.
In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.
Examples:
dynamicIntervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
const timeoutObject = dynamicIntervalCount(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals indefinitely
console.log(timeoutObject); // Timeout { ... }
*/

// function dynamicIntervalCount(cb, delay, amount) {
//     if (amount === undefined) {
//         return setInterval(cb, delay);
//     }

//     const interval = setInterval(() => {
//         cb();
//         amount--;
//         if (amount === 0) {
//             clearInterval(interval);
//         }
//     }, delay);

//     return interval;
// }