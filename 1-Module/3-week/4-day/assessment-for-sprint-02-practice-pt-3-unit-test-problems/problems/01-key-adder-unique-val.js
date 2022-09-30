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
    let values = Object.values(object)
    // console.log(values)
//if the value doesn't exist in our values array then we can do the thing
if(!values.includes(value)){
    object[key] = value
}
    return object

//FOR IN LOOP TO ADD TO OBJECTARR
// let objectArr = []
// for (let keys in object){
//     let currValue = object[keys]
//     if (object[keys] === value){
//         // object[keys] = value
//         return object
//     }

//     // console.log(currValue)
//     // objectArr.push(currValue)
// }
// object[key] = value
// // console.log(objectArr)
//     // if (!objectArr.includes(value)){
//     //     object[key] = value
//     // }
//     return object

}
let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
