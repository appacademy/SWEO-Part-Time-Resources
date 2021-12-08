/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array#forEach.

Examples:

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']
*******************************************************************************/

let myForEach = function (arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};



// function foo(inputArr) {
//     // for (let i = 0; i < inputArr.length; i++) {
//     //     return inputArr[i];
//     // }
//     return inputArr.map(function(ele) {
//         return ele * 2;    
//     })
// }

// let arr = [1, 2, 3];
// console.log(foo(arr));


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myForEach;




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

let myMapBuggy = function (array, cb) {
  let newMappedArray = [...array];

  for (index = 1; index < array.lenth; index + 1) {
    newMapedArray = [...newMappedArray, cb(index)];
  }

  return newMappedArray;
}



let result1 = myMapBuggy([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMapBuggy(['run', 'Forrest'], function (el) {
  return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]






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




understand
  input: value, a number, a callback function
  output: a version of the input value (same data type) that has been run through the callback n (input) times

plan
  make a copy of the input value (currentValue)
  use a for loop to repeat _____ n times...
    take the currentValue pass it into the callback
    reassign currentValue with that output
  return currentValue


*******************************************************************************/

let multiMap = function (inputValue, nTimes, callback) {
  let currValue = inputValue;

  for (let i = 0; i < nTimes; i++) {
    let cbReturnValue = callback(currValue);
    currValue = cbReturnValue;
  }

  return currValue;
};



let result1 = multiMap(7, 2, function (n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function (n) {
  return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function (s) {
  return s + "!";
});
console.log(result3); // hi!!!!!




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

final result of passing the value through all of the given callbacks




understand
    accepts a value (int?) and any number of callbacks as arguments
    return the final result of passing the value through all of the given callbacks

    inputs: value, variable number of callback functions (1+...)
    output: the value passed through all the callback functions in order (?)
            note: same datatype as input value

plan
    use rest parameters syntax (...) in function definition to contain all arguments in single array
    assign a variable inputValue square-bracketing into the inputArray at 0
    use for loop to iterate through all other elements in inputArray (callbacks)...
        assign a variable for the return value of the current callback function invoked with inputValue
        reassign inputValue with that new return value from the callback invocation
    return inputValue



*******************************************************************************/

let chainMap = function (inputValue, ...restCallbacks) {
  let retValue = inputValue;

  for (let i = 0; i < restCallbacks.length; i++) {
    let currCb = restCallbacks[i];
    let currRetVal = currCb(retValue);

    retValue = currRetVal;
  }

  return retValue;
};


let add5 = function (n) {
  return n + 5;
};

let half = function (n) {
  return n / 2;
};

let square = function (n) {
  return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4