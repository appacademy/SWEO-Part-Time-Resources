/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

// const arrowMirrorArray = (arr) => arr.concat(arr.slice().reverse())
// const arrowMirrorArray = array => [...array, ...array.reverse()];

// const arrowMirrorArray = (array) => {



// }

const arrowMirrorArray = (arr) => {
	let mirrorArr = [];
	let finalArr = [];

	for (let i = arr.length - 1; i >= 0; i--) {
	  mirrorArr.push(arr[i]);
	  finalArr = [...arr, ...mirrorArr];
	}

	console.log(finalArr);
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
