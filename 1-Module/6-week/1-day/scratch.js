//Asynchronous Programming

/*
Synchronous code is code that has an inherent order among the commands and this order of execution is 
guaranteed.

Asynchronous code has no guarantee in the order of which commands will be executed.
*/

// console.log("One");
// console.log("Two");
// console.log("Three");


// function foo() {
//     console.log("Two");
// }

// console.log("One");
// foo();
// console.log("Three");

console.log("Start");

setTimeout(() => {
    console.log("Time is up")
}, 1000)

console.log("End");
