/***********************************************************************
Write a RECURSIVE function `batchTimeouts` that accepts an array of callbacks and an
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

hint#1: recursive way #1 - can use default parameters
hint#2: recursive way #2 - if not using default params, how can we combine result of a previous array with the another array through recursion?

***********************************************************************/
const batchTimeouts = (cbsArr, delaysArr) => {
    //base case
    if(cbsArr.length === 0){
        return;
    }
    let cbs = cbsArr[0];
    let delay = delaysArr[0];
    setTimeout(cbs, delay);
    return batchTimeouts(cbsArr, delaysArr.slice(1)); //cbsArr.slice(1) gets us closer to the base case at each recursive call
}

// const testArr = [1,2,3,4]
// const frontEl = testArr[0]; //1
// const slicedArr = testArr.slice(1); //[2,3,4]
// console.log("sliced array", slicedArr);
// console.log("first element:", frontEl);
// console.log("original array:", testArr);


const sayHello = () => console.log('hi');
const sayGoodbye = () => console.log('bye');
const shout = () => console.log('WHAT?');
const tasks = [sayHello, sayGoodbye, shout];
const delays = [5000, 2000, 9000];

const timeoutObjs = batchTimeouts(tasks, delays);
// should print:
//  'bye' after 200 ms
//  'hi' after 500 ms
//  'WHAT?' after 900 ms