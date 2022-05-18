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
//if you have solved this problem before, try to see if you can solve it another way!

function keyInObjectArray(objArray, keyString) {
  // for (let i = 0; i < objArray.length; i++) {
  //   for (let j in objArray[i]) {
  //     if (j === keyString) {
  //       return true;
  //     }
  //   }
  // }
  // //if we get through the end and found no match, return false
  // return false;

  for(let i=0; i< objArray.length; i++){
    //current obj inside the array at i
    let currentObj = objArray[i];
    // if(currentObj[keyString] !== undefined){
    if(keyString in currentObj){
      //if keyString exists, then returns true
      return true;
    }
  }
  //return false at the end if no keyString match was found
  return false;
}




let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

console.log(keyInObjectArray(objArray, 'planet')); // => true
console.log(keyInObjectArray(objArray, 'age')); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
console.log(keyInObjectArray(objArray, 'animal')); // => false


