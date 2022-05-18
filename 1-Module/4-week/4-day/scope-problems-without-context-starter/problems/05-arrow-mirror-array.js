/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/
//input: array [1,2,3]
//output: an array but the original + original reversed  [ 1, 2, 3, 3, 2, 1 ]

const arrowMirrorArray = (array) => {
  //create a result array
  const result = [];

  //push original ele into result
  for(let i=0; i<array.length; i++){
    result.push(array[i])
  }

  //make a shallow copy so we can reverse it (original copy)
  const copyArr = [...array] //create a shallow copy for us

  //push the elements in copy very but reversed, first we need to reverse\
  copyArr.reverse();
  for(let i=0; i<copyArr.length; i++){
    result.push(copyArr[i])
  }

  return result;
}

console.log(arrowMirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrowMirrorArray;
