/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

// function valuePair(obj1, obj2, key) {
//   let arr = [obj1[key], obj2[key]];

//   return arr;
// }

function valuePair(obj1, obj2, key) {
  // returning an array, so create my final output
  let finalArr = [];

  // push value of obj1 @ key into array
  finalArr.push(obj1[key]);
  // push value of obj2 @ key into array
  finalArr.push(obj2[key]);

  return finalArr;
}

// let object1 = { name: 'One', location: 'NY', age: 3 };
// let object2 = { name: 'Two', location: 'SF' };
// valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
