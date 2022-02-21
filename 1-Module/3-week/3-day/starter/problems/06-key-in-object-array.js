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
// loop through the objarray and create a variable for each obj in isolation 
// writing and if statement for if(key in obj) if it is ever true, return true
// else return false at the end of the function


function keyInObjectArray(objArray, keyString) {
  for(i in objArray){
    if(keyString in objArray[i]){
        return true 
    }
  }
  return false
}
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];
console.log('TEST')
console.log(keyInObjectArray(objArray, 'planet')); // => true
console.log(keyInObjectArray(objArray, 'age')); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
console.log(keyInObjectArray(objArray, 'animal')); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
