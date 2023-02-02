/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

// const arrowAvgValue = (array) => {
// 	let sum = 0;
// 	for(let i = 0; i < array.length; i++){
// 		sum += array[i]
// 	}
// 	return sum / array.length
// }

const arrowAvgValue = array => array.reduce((acc, val) => acc + val, 0) / array.length

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  module.exports = null;
}
