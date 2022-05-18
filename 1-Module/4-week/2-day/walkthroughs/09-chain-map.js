/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result


Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/
//input: value, potentially infinite amount of callbacks
//output: value after applying each callback

//arrayOfCbs --> array that contains x amount of callbacks --> [cb, cb1, cb...]
let chainMap = function(value, ...arrayOfCbs) {
    //apply each call back in the array to the value and update that value
    for(let i=2; i<arrayOfCbs.length; i++){
        let currentCB = arrayOfCbs[i];
        value = currentCB(value) //reassign value each time after applying the callback
        console.log("value:", value);
    }
    return value;

    //---------------or another option (comment out above)--------------------
    // //apply each call back in the array to the value and update that value
    // let updatedValue = value; //value is the inital value that we pass to it
    // for(let i=2; i<arrayOfCbs.length; i++){
    //     let currentCB = arrayOfCbs[i];
    //     updatedValue = currentCB(updatedValue) //reassign to update each time after applying the callback
    //     console.log("value:", updatedValue);
    // }
    // return updatedValue;
};




let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5, half, square));  // 225




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = chainMap;
