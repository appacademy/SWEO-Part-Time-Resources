/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

//!!START
// let arrowMirrorArray = (array) => {
//   let newArr = []

//   array.forEach(el =>{
//     newArr.push(el)
//   })

//   for (let i = array.length -1; i >= 0; i--){
//     let el = array[i]
//     newArr.push(el)
//   }

// return newArr
//   // return [...newArr, ...array.reverse()]
// };

const arrowMirrorArray = array => array = [...array, ...array.reverse()];

//!!END

console.log(arrowMirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(arrowMirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
