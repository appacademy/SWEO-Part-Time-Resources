//ASYNCHRONOUS VS SYNCHRONOUS CODE

//SYNCHRONOUS CODE - Code that has an inherent order of execution

// console.log("one")
// console.log("two")
// console.log("three");

/*
function foo() {
  console.log("Two");
}

console.log("one")
foo();
console.log("three");
*/

//ASYNCHRONOUS CODE - Code that has NO GUARANTEED order
//   setTimeout();

//SYNTAX of setTimeout
//setTimeout(function, time in)

// setTimeout(() => {
//   console.log("Bruh!")
// }, 1500);

/*
console.log("Start");

setTimeout(() => {
  console.log("I've been waiting");
}, 1500);

console.log("End");
*/

//Because setTimeout is ASYNCHRONOUS, it doesn't wait to execute the lines below it


//MESSAGE QUEUE AND EVENT LOOP

//The event loop has three parts - Callstack, Message Queue, Heap
//A queue is a data structure similar to a drive through or a line
//New items must be added to the back of the queue (Enqueueing), and items must be taken off the front (Dequeueing)

//SetInterval - Executes a function call with a specified time delay
//clearInterval - stops function execution

/*
let counter = 0;

let counterFuncy = setInterval(() => {
    console.log(counter);
    counter++;
    if (counter === 10) {
      console.log(counter);
      clearInterval(counterFuncy);
    }
}, 1000);
*/

//GETTING USER INPUT


//BatchTimeouts

/*
Write a function, `batchTimeouts`, that accepts an array of callbacks and an
array of delays in milliseconds. The function should set a timeout for each
callback in the array with its corresponding delay. For example, the
callback at index 0 should be set with the delay at index 0,
the callback at index 1 should be set with the delay at index 1, and so on.
The `batchTimeouts` function should return an array containing the Timeout
objects for each timeout that was set. You may assume that both array arguments 
have the same length.

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
*/

// const tasks = [sayHello, sayGoodbye, shout];
// const delays = [500, 200, 900];

// function batchTimeouts(callbacks, delays) {
//     return callbacks.map((cb, index) => {
//       return setTimeout(cb, delays[index])
//     })
// }

/*
Write a function, `intervalCount`, that accepts a callback, a delay in 
milliseconds, and an amount. The function should set an interval with 
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.
Hint: utilize a 'closure' to your advantage

Example
intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
*/

/*
function intervalCount(cb, delay, amount) {
  let interval = setInterval(() => {
    cb();
    amount--;
    if (amount === 0) {
      clearInterval(interval)
    }
  }, delay) 
}
*/

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

