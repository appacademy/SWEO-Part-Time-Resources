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
//inputs: value, n, callback
//output: a new value after applyinh callback n number of times.
//example: value = 7, n = 2, cb mulitples value x 10 --> 70 // 700 // stop
let multiMap = function(value, n, callback) {
  //i want to apply the callback n times on value (for loop)
  let updatedValue = value; //set intially to the original value
  for(let i=0; i<n; i++){
    //takes intial 7 multiple by 10 --> 70; then take 70 multiple by 10 --> 700
    updatedValue = callback(updatedValue); //every time callbacks get applied, it should update the value to be 70 then 700
    console.log("is updated?:", updatedValue); 
  }
  return updatedValue;
};


let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;
