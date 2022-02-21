/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/
// write a function that takes in a value a number and a callback
// we want to loop, from 0 to the n 
// call the callback callback on the value inside the loop
// reassign value to the result of passing value into the cb
// return the value of running it through the cb n times

let multiMap = function(value, n, cb) {
    for(let i = 0; i < n ; i ++){
      value = cb(value)
    }
    return value 
}



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;
