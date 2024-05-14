//Sync vs Async

//Synchronous - Synchronous code is code that has an inherent order among the
//commands. This order of execution is guaranteed

// console.log("One");
// console.log("Two");
// console.log("Three");

// function foo() {
//     console.log("Two");
// }

// console.log("One");
// foo();
// console.log("Three");

//Asynchronous - Async code has no guarantee of the order in which commands are executed.

console.log("ONE")

setTimeout(() => {
    console.log("TWO")
}, 1000)

console.log("THREE")