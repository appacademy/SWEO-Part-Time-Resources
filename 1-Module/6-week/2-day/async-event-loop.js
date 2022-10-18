console.log("----------------Asyncronous Javascript----------------")
// console.log("----Synchronous `blocking code`----")
//execution of code in order and is predictable / guaranteed
let foo = function () {
    console.log("two");
};

let fibonacci = (term) => {
    //base cases
    if (term === 0) return 0;
    if (term === 1) return 1;
    if (term === 2) return 1;

    //recursive case + recursive step
    let answer = fibonacci(term - 1) + fibonacci(term - 2);
    // console.log(answer);
    return answer;
}



// console.log("one");
// foo(); //foo is blocking "three" from being logged until it finishes evaluating.
// console.log(fibonacci(35)); //need to evaluate all recursive calls and finishes everything inside callstack before going on to the next.
// console.log("three");



// console.log("----Asynchronous `NON-blocking code`----")
// //- code that doesn't block up the callstack & is unpredictable / order not guaranteed.

// //- Why do we need non-blocking code? think of a request being made for data to a different server, or a user input (we don't ever know when they going to happen or resolve)

// console.log("synchronous code start....") //this line is synchronous code


// const requestForData = () => {
//     console.log("Here is your data...");
//     console.log("request did not block up the callstack!")
//     console.log("i.e. request was processed by another API / server on the web!")
// }
// const requestForData1 = () => {
//     console.log("WHICH WILL PRINT");

// }
// //  setTimeout(requestForData, 3000); //this is asynchronous code
// // // setTimeout, takes a callback (first arg) and then executes the callback after the given delay (second arg)
// setTimeout(requestForData, 0); //what happens if I put the delay to 0?
// setTimeout(requestForData1, 0); //what happens if I put the delay to 0?


// console.log("synchronous code end....") //this line is synchronous code

// //call stack is only empty, after EVERY line of synchronous code in the file has been executed.
// //after that, we dequeue the first thing in the message queue onto the main call stack to be evaluated.

// console.log("----------------Async & Event Loop in action----------------");
// //Event Loop is made up of 2 key components
// // - Call stack (stack datastructure, pop/push, Last in first out)
// // - Message Queue (queue datastructure, enqueue/dequeue, first in first out)

//helloFunc callback
// const helloFunc = () => {
//     console.log("This is the settimeout helloFunc with 0 seconds delay!")
// }

// // //setTimeout IS ASYNCRONOUS CODE. It takes a callback function, and then a delay as arguments
// setTimeout(helloFunc, 0);

// let fibonacci2 = (term) => {
//     //base cases
//     if (term === 0) return 0;
//     if (term === 1) return 1;
//     if (term === 2) return 1;
//     const helloFunc = () => {
//         console.log("This is the settimeout helloFunc with 0 seconds delay!")
//     }

//     setTimeout(helloFunc, 0);


//     //recursive case + recursive step
//     let answer = fibonacci2(term - 1) + fibonacci2(term - 2);
//     // console.log(answer);
//     return answer;
// }
// console.log(fibonacci2(4));



// //what will be outputted first? The fibonacci of 25 answer or helloFunc's console.log

// //fibonacci(25) gets output first because all synchronous code will get executed before the async code in the main call stack.

// //----event loop steps----
// //result for fibonacci2 will be the first to output before the callback inside setTimeout.
// //- this is because setTimeout will process the callback asynchronously elsewhere on a different call stack, then after the delay expires, it will send helloFunc() to our message queue.
// //- while that is happening, all the syncronous code is ran first on the main call stack until there is no synchronous code left to run (fibonacci2's recursive calls until the end)
// //- once the main call stack is empty, items like helloFunc() will be added back to the callstack from our message queue through the event loop!
