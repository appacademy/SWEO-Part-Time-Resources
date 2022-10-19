// console.log("-----------------setTimeout Practices-----------------")
//setTimeout is an asynchronous function

// setTimeout, takes a callback (first arg) and then executes the callback after the given delay (second arg), and pass to the callback any optional arguments (third+ args)

// console.log("-----Practice #1: What is the behavior?-----")
// // console.log("start....") //this line is synchronous code

// const requestForData = () => {
//     console.log("FIRST");
// }
// const requestForData3 = () => {
//     console.log("SECOND");
// }


// setTimeout(requestForData, 3000); //this is asynchronous code
// setTimeout(requestForData3, 0); //what happens if I put the delay to 0?

// console.log("synchronous code end....") //this line is synchronous code

//Remember that the call stack is only empty, after EVERY line of synchronous code in the file has been executed and evaluated.

//after the callstack is empty, EVENT LOOP dequeue the first thing in the message queue and pushes it into the main call stack to be evaluated.

// console.log("-----Practice #2: What is the order that is printed?-----")
// setTimeout(() => {
//     console.log('data');
// }, 0); //setTimeout(callbackFunc, delay)
// console.log('fizz');
// console.log('buzz');

//Can you draw out the event loop and describe what is happening at each line of code?


// console.log("-----------------setTimeout Optional Args-----------------")
//the third+ argument(s) passed to setTimeout are the arguments that you want to invoke the callback(first arg) with.

//syntax 1: setTimeout(callback, delay, arg1, arg2, arg3...)

/*
syntax 2: setTimeout(()=>{
    callback(arg1, arg2, arg3, ...);
}, delay)
*/

// console.log("-----Practice #3: What is the output?-----")
// let arr = ["potato", "chip"]
// const food = (a, b) => {
//     console.log(`${a} ${b}`);
// }

// setTimeout(food, 1000, ...arr);

// console.log('end');

// //syntax 2:
// setTimeout(()=>{
//     //we wrap this invokation of food with its parameters in an anonymous function because setTimeout takes in a FUNCTION
//     food('potato', "tomato")
// }, 1000)


// console.log("-----Practice #4: What if I wanted to run additional functions, logic, code when using setTimeout?-----")
const first = () => {
    console.log("first");
}
const third = () =>{
    console.log("third");
}

setTimeout(()=>{ //WRAPPING ALL OF THE LOGIC BELOW in an ANONYMOUS CALLBACK FUNC
    first(); //invoke the first functon
    console.log("second"); //add more logic
    third(); //invoke the third function
}, 1000);
