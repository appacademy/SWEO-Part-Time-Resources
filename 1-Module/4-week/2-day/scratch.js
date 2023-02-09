/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array#map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/

let myMap = function (array, cb) {
  // create a new array that i will push in the result of the cb
  let newArray = []
  // loop through array and run cb on each element
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]))
  }
  // return the new array
  return newArray
}

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
// Function should accept a value, number, and cb
let multiMap = function (value, number, cb) {
  // iterate the number of times that (number) is
  for (let i = 0; i < number; i++) {
    console.log('before', value)
    value = cb(value)
    console.log('after', value)
    // inside the loop were gonna invoke the cb with the value
    // track changes to the the value or assign to a new variable
  }

  // return updated value after being run through the callback n times
  return value
}

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

// Function accepts a value and any number of callbacks
function chainMap(val, ...callbacks) {
  // Iterate through callbacks
  callbacks.forEach(function (cb) {
    // invoke cb with accumulated value and save result for next iteration
    val = cb(val)
  })
  //return accumulated value
  return val
}
