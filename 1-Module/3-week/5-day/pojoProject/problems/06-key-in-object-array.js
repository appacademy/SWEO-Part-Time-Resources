/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array 
of objects as the first parameter and a string as the second. The 
`keyInObjectArray` function will return `true` if any of the objects contains 
the `keyString` as a key within them, and `false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  // loop through our array
  for (let i = 0; i < objArray.length; i++) {
    // save each object into a variable
    let eachObject = objArray[i];
    // loop over the keys in the object
    for (let key in eachObject) {
      // if the key in the object matches our passed in keyString, return true
      if (key === keyString) {
        return true;
      }
    }
  }

  // after our loop has fully ran, if we never saw a matching key, THEN return false
  return false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
