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
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:


- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:
our input is going to be a number,  an array of callbacks(...callbacks)
our output is going to be a number
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

*******************************************************************************/
// write a function that takes a num and a number of cbs
// loop over the cbs array 
// on each iteration we need to change the value into whatever the cb turns it into
// return num 


// let chainMap = (num, ...cbs) => cbs.reduce((accume, ele) =>  ele(accume), num)
let chainMap = function(num, ...cbs){

    // loop over the cbs array 
    cbs.forEach(function(ele){
        num = ele(num)
    })
    // for (let i = 0;  i < cbs.length; i++)
    //     console.log(cbs)
    //     num = cbs(num)
    // }
    return num
}







let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

// console.log(chainMap(25, add5));                // 30
// console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
// console.log(chainMap(4, square, half));         // 8
// console.log(chainMap(4, half, square));         // 4





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = chainMap;
