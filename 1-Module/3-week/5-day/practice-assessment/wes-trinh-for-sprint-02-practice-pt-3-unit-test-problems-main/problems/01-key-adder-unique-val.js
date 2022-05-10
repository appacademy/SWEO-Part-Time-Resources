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
// console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" } 

***********************************************************************/
//input(obj, key, value): let cat = { name: 'Willie', color: 'orange' }, "toy", "yarn";
//output(obj):                      {name: "Willie", color: "orange", toy: "yarn"}

// console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" } 
//didn't add "fruit" key and "orange" value because orange already exists as a value somewhere.
function keyAdderUniqueVal(object, key, value) {
    //get all values first to see if our value is in there
    let allValues = Object.values(object);
    //if value is NOT in allVAlues
    if (!allValues.includes(value)) {
        //add the key and value into the object using =
        object[key] = value;
    }
    //updated the object, and now Im going to return it.
    return object;
}

// -----Aman's solution----
// function keyAdderUniqueVal(object, key, value) {

//     // loop over all existing key value pairs
//     for (let otherKey in object) {
//         let existingValue = object[otherKey]; // obj[key]= value

//         if (existingValue === value) { // value is already assigned to another key so we will return the object as-is
//             return object;
//         }
//     }

//     // if we reach the end of the loop we can assume the value is not assigned to another key in the object
//     object[key] = value;

//     return object;
// };


let cat = { name: 'Willie', color: 'orange' };
console.log(keyAdderUniqueVal(cat, "toy", "yarn")); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(keyAdderUniqueVal(cat, "fruit", "orange")); // => {name: "Willie", color: "orange", toy: "yarn"}
// console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" } 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
