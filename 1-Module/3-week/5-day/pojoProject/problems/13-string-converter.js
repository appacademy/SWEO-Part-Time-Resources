/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/
// same as practice assessment helper function!!!
function stringConverter(string) {
  // returning an object, so create it to keep track of string counts
  let counterObj = {};

  // loop over our string
  for (let i = 0; i < string.length; i++) {
    // set each character in our string to be a variable
    let currChar = string[i];

    // if our current character exists in our object
    if (counterObj[currChar]) {
      // increase its value in our object by 1
      counterObj[currChar]++;
    } else {
      // otherwise, create it and set it's value to 1
      counterObj[currChar] = 1;
    }
  }

  return counterObj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
