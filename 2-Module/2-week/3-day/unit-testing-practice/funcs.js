//!!START SILENT
/*
1. Is Five
Define a function `isFive` that will return `true` if the given number is equal
to 5 and `false` if it is not.
*/
//!!END
function isFive(num) {
  //!!START
  return num === 5;
  //!!END
}

//!!START SILENT
/*
2. Is Odd
Write a function `isOdd` that takes in a number as an argument and returns
`true` if the number is odd and returns `false` otherwise.
*/
//!!END
function isOdd(number) {
  //!!START
  if (typeof number !== "number") {
    throw Error("some error");
  }
  return number % 2 !== 0;
  //!!END
}

//!!START SILENT
/*
3. Array  of the Range
Write a function `myRange(min, max, step)` that takes in 3 numbers as
parameters. The function should return an array of numbers between and
inclusive of the `min` and `max` at `step` intervals.
*/
//!!END
function myRange(min, max, step = 1) {
  //!!START
  const array = [];
  for (let i = min; i <= max; i += step) {
    array.push(i); //no way to test that i is being logged
  }
  return array;
  //!!END
}


module.exports = { isFive, isOdd, myRange };
