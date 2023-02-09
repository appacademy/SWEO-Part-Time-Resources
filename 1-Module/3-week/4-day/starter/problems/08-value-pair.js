/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
***********************************************************************/

function valuePair(obj1, obj2, key) {
  // your code here
  let val1 = obj1[key]
  let val2 = obj2[key]
  return [obj1[key], obj2[key]]
}

// let object1 = {name: 'One', location: 'NY', age: 3};
// let object2 = {name: 'Two', location: 'SF'};
// console.log(valuePair(object1, object2, 'location')); // => [ 'NY', 'SF' ]
// console.log(valuePair(object1, object2, 'name')); // => [ 'One', 'Two' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
