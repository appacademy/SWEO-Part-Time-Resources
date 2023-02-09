/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

make a plan 
  create a newArray variable
  loop over our passed array
    pass all elements in opposite order to our newArray
  concatenate both of our arrays together and return it 


***********************************************************************/

function mirrorArray(array) {
  // your code here...
  // let temp = array.slice()
  let newArr = []
  for(let i = 0; i < array.length; i++){
    let ele = array[i]
    newArr.unshift(ele)
  }
  let concatenated = array.concat(newArr)
  return concatenated
}

// console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mirrorArray;
