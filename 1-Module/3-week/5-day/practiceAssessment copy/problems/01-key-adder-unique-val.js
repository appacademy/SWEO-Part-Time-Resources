/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples


***********************************************************************/

function keyAdderUniqueVal(object, key, value) {
  // check that the value does not exist in the obj
  // if it does, return the obj
  // if it doesn't add the key value pair 
  // return the mutated obj

  let values = Object.values(object);
  
  // let filtered = values.filter(function(val){
  //   return val === value;
  // })

  // if (filtered.length < 1){
  //   object[key] = value;
  // } 
  if (!values.includes(value)){
    object[key] = value;
  }

  console.log('in the func', object)
  return object;
}

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
