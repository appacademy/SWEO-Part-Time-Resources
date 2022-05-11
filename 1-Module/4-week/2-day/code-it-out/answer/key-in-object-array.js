/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array 
of objects as the first parameter and a string as the second. The 
`keyInObjectArray` function will return `true` if any of the objects contains 
the `keyString` as a key within them, and `false` if not.


Examples:
let objArray = [
  { name: "Rupert" }, //i=0
  { age: 42 }, //i=1
  { planet: "Earth", system: "Milky Way" } //i=2
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/
//if you have solved this problem before, try to see if you can solve it another way!

function keyInObjectArray(objArray, keyString) {
  for(let i=0; i<objArray.length; i++){
    let currentObj = objArray[i]; 
    //if(keyString in currentObj){
    if(currentObj[keyString] !== undefined){ //!== undefined means that it exists
      return true;
    }
  }
  return false;
  // for(let i=0; i<objArray.length; i++){
  //   let currentObj = objArray[i];
  //   let allCurrentKeys = Object.keys(currentObj);
  //   for(let j=0; j<allCurrentKeys.length; j++){
  //     let key = allCurrentKeys[j]
  //     if(key === keyString){
  //       return true;
  //     }
  //   }
  // }
  // return false;
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


