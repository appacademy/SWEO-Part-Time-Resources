/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // need to return an object, so create my object to count with
  let counterObj = {};

  // iterate through array
  for (let i = 0; i < array.length; i++) {
    // create variable for each value in array
    let currentString = array[i];

    // check if my counter obj has the key of our current string
    // if it does, increment counter by 1
    // if (counterObj[currentString] !== undefined)
    // if (currentString in counterObj)

    // if counterObj[currentString] === undefined, that is falsy, so else will run.
    if (counterObj[currentString]) {
      counterObj[currentString]++;
    } else {
      // if it doesn't, create it, and set count to 1
      counterObj[currentString] = 1;
    }
  }

  return counterObj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
