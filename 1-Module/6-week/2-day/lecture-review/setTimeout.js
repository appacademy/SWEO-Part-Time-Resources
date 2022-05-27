console.log("-----------------setTimeout Practices-----------------")
//setTimeout is an asynchronous function --> doesn't block execution of other code after it

// setTimeout, takes a callback (first arg) and then executes the callback after the given delay (second arg), and pass to the callback any optional arguments (third+ args)

/*
syntax:
setTimeout(cb, delayInMilliseconds, arg1, arg2, arg3, ...)

*/

console.log("-----Practice #1: What is the behavior?-----")
// console.log("start....") //this line is synchronous code

// const requestForData = () => {
//     console.log("Here is your data...");
// }

// // setTimeout(requestForData, 3000); //this is asynchronous code
// setTimeout(requestForData, 0); //what happens if I put the delay to 0?

// console.log("end....") //this line is synchronous code

//Remember that the call stack is only empty, after EVERY line of synchronous code in the file has been executed and evaluated.

//after the callstack is empty (no more sync code to run), EVENT LOOP dequeue the first thing in the message queue and pushes it into the main call stack to be evaluated.

console.log("-----Practice #2: What is the order that is printed?-----")

// setTimeout(() => {
//     console.log('data');
// }, 0); //setTimeout(callbackFunc, delay)
// console.log('fizz');
// console.log('buzz');

//Can you draw out the event loop and describe what is happening at each line of code?

console.log("-----------------setTimeout Optional Args-----------------")
//the third+ argument passed to setTimeout are the arguments that you want to invoke the callback(first arg) with.

//remember we pass a function to setTimeout UNINVOKED. then setTimeout does the heavy lifting for us, and invokes the callback func that we pass to it, with the optional arguments

// syntax: setTimeout(callback, delay, arg1, arg2, arg3...)

/*
syntax 2:

setTimeout(()=>{
    callback(arg1,arg2,arg3...)
}, delay)
*/

//THIS IS WRONG:
//setTimeout(callback(arg1, arg2, arg3), delay)
//setTimeout("helloworld"(), delay)

console.log("-----Practice #3: What is the output?-----")

// const food = (a, b) => {
//     console.log(`${a} ${b}`);
//     return "helloWorld"
// }

// setTimeout(food, 1000, 'potato', 'tomato');
// // setTimeout(food("potato", "tomato"), 1000);  //INCORRECT

// console.log('end'); //sync code


console.log("-----Practice #4: What is outputted?-----")
const foo = (a, b) => {
    console.log('time is up');
    console.log(`${a} ${b}`);
}

const res = setTimeout(foo, 0, 'potato', 'tomato'); //timeOut id object that represents the return value of setTimeout
console.log("timeoutOjb", res);


// console.log("-----Practice #5: What if I wanted to run additional functions, logic, code when using setTimeout?-----")
// const first = () => {
//     console.log("first");
// }
// const third = () =>{
//     console.log("third");
// }

// //run both first and third inside a single setTimeout
// //add an anonymous wrapper function that is then taking in and invoking the functions we want
// setTimeout(()=>{ 
//     first();
//     console.log("second");
//     third();
// }, 1000); //setTimeout will invoke the anonymous wrapper function after the given delay --> execute all the line of code inside that wrapper.