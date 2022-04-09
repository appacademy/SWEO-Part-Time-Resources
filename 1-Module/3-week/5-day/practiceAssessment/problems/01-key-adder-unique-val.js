/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
***********************************************************************/

function keyAdderUniqueVal(object, key, value) {
  let myValues = Object.values(object);

  if (!myValues.includes(value)) {
    object[key] = value;
  }

  return object;
}

// function keyAdderUniqueVal(object, key, value) {
//   let doesExist = false;
//   let myValues = [];
//   for (let key in object) {
//     let value = object[key];
//     myValues.push(value);
//   }

//   // console.log(myValues);

//   for (let i = 0; i < myValues.length; i++) {
//     let myElement = myValues[i];
//     if (myElement === value) {
//       doesExist = true;
//     }
//   }
//   if (!doesExist) {
//     object[key] = value;
//   }
//   return object;
// }

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, 'toy', 'yarn'); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, 'fruit', 'orange'); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
