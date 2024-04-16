// Function hoisting
// hello()
// let x = 'hello'
// function hello(){
//     console.log(x)
// }

// hello() // works fine
// // Function Declaration
// function hello(){
//     console.log('Hello')
// }
// hello() // ReferenceError: Cannot access 'hello' before initialization
// Function Expression
// let hello = function(){
//     console.log('Hello')
// }

// IIFE's (iffy's)
// useful when creating a function that will only be invoked once and never again
// can be used to protect the variables in the function, since an outer scope does not have access to
// an inner scopes variables
// you can only use IIFE's with function expressions


// iife with function expression
// const hello = function() {
//     console.log('hello')
// }()

// you can turn any function declaration into an expression by wrapping the function with ()

// iife with arrow function
// (() => {
//     console.log('hello')
// })()

// iife with function declaration
// we use parenthesis to parse the function as an expression, effectively turning the declarion into a function expression
// (function hello(){
//     console.log('hello')
// })()

// ASYNCHRONOUS CODE

// import the readline module into our file
// const readline = require('readline')

// // create an interface where we can talk to the user
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// const answers = {}

// ask the user a question
// Main thread is freed up while we wait for user input. HandleResponeOne will
// be executed when the user has submitted their response.

// rl.question("What's up, doc? ", handleResponseOne)
// console.log('waiting for input for first question')

// // first callback
// function handleResponseOne(firstAnswer) {
//   console.log(firstAnswer + ' is up.')
//   // save firstAnswer to answer object
//   answers['up'] = firstAnswer
//   rl.question("What's down, clown? ", handleResponseTwo)
//   console.log('waiting for input for second question')
// }

// // second callback (passed to `rl.question()` in handleResponseOne)
// function handleResponseTwo(secondAnswer) {
//   console.log(secondAnswer + ' is down.')
//   answers['down'] = secondAnswer
//   rl.question("What's left, Jeff? ", handleResponseThree)
//   console.log('waiting for input for third question')
// }

// // third callback (passed to `rl.question()` in handleResponseTwo)
// function handleResponseThree(thirdAnswer) {
//   console.log(thirdAnswer + ' is left.')
//   answers['left'] = thirdAnswer
//   // close the interface
//   rl.close()
//   console.log(answers)
// }

// --------------- Problem 1 ---------------------------
// console.log('one');
// console.log('two');
// console.log('three');

// // --------------- Problem 2 ---------------------------
// const foo = () => {
//     console.log('two');
// };

// console.log('one');
// foo();
// console.log('three');

// // --------------- Problem 3 ---------------------------
// console.log('one');

// // callback, delay, param1, param2
// setTimeout(() => {
//     console.log('two');
// }, 1500);

// console.log('three');

// --------------- Problem 1 ---------------------------
// const someCallback = () => {
//     console.log('time is up');
// }
// setTimeout(someCallback, 5000);
// setTimeout(someCallback, 6000);

// console.log('end');

// // --------------- Problem 2 ---------------------------
// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }
// // callback, time until callback invokes, param1, param2, etc
// setTimeout(foo, 1000, 'potato', 'tomato');

// console.log('end');

// // --------------- Problem 3 ---------------------------
// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }

// const timeoutId = setTimeout(foo, 1000, 'potato', 'tomato');
// clearTimeout(timeoutId);
// const timeoutId2 = setTimeout(foo, 1000, 'tomato', 'potato');

// --------------- Problem 1 ---------------------------
// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }
// // // callback, time until callback invokes, param1, param2, etc
// setInterval(foo, 1000, 'potato', 'tomato');

// --------------- Problem 2 ---------------------------
// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }

// const interval = setInterval(foo, 1000, 'potato', 'tomato');
// clearInterval(interval);
// const interval2 = setInterval(foo, 1000, 'potato', 'tomato');

// // --------------- Problem 3 ---------------------------
// const intervalCount = (count, delay) => {
//     const intervalObj = setInterval(() => {
//         console.log('time is up');
//         count--;

//         if (count === 0) {
//             clearInterval(intervalObj);
//         }
//     }, delay);
// }

// intervalCount(3, 2000);
