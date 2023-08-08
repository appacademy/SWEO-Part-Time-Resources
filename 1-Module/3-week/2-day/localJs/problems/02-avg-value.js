/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

function avgValue(array) {
  // Your code here
  // what is average? all things added together / num of things
  // ->> all nums in the array, summed, divided my length

  let sum = array[0];

  for(let i = 1; i < array.length; i++){
    sum += array[i]

  }
  return sum / array.length;
}

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = avgValue;