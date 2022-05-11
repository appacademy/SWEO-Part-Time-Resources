/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

input: value, n, callback
output: value after we apply callback n number of times
example: 7 x 10 --> 70 // 70 x 10 --> 700 //stop

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
// input: value, n, callback
// output: value after we apply callback n number of times
// example: 7 x 10 --> 70 // 70 x 10 --> 700 //stop

let multiMap = function(value, n, callback) {
  //we need to make sure to update value each time we apply callback
  for(let i=0; i<n; i++){
    //reassign value to be the new updated value after we apply callback
    value = callback(value); //70 // 700 // stop
    // console.log(value);
  }
  return value;
};

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700