/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.

Example 1:
let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60

Example 3:
let table2 = recVolume(3); // returns a function
table2(2); // returns a function
console.log(table2(1)); // prints 6
console.log(table2(75)); // STILL prints 6

***********************************************************************/

// your code here
// let recVolume = height => {
// 	let array = [height]

// 	function internalVolume(secondArg){
// 		array.push(secondArg)
// 		if(array.length >= 3){
// 			let volume = 1
// 			for(let i = 0; i < 3; i++){
// 				volume *= array[i]
// 			}

// 			return volume
// 		} else if(array.length < 3){
// 			return internalVolume
// 		}
// 	}

// 	return internalVolume
// }

// let recVolume = (height) => {
// 	let width;
// 	let length;
// 	return (n) => {
// 	  if (width === undefined) {
// 		width = n;
// 	  } else if (length === undefined) {
// 		length = n;
// 	  }
// 	  return height * width * length;
// 	};
//   };

const recVolume = height => {
	let num1 = height;
	let num2;
	let num3;
	let result;
	let inner = (number) => {
	  if(num2 === undefined && number !== undefined){
		num2 = number
		return inner
	  }
	  if(num1 !== undefined && num2 !== undefined && result === undefined){
		num3 = number
		result = num1 * num2 * num3
		return result
	  }
	  if(result !== undefined){
		return result
	  }
	}
	return inner
}

// function recVolume(height) {

// 	let volume = [height];

// 	return (tableB = (side) => {
// 	  if (volume.length < 3) {
// 		volume.push(side);
// 	  }
// 	  if (volume.length === 3) {
// 		return volume[0] * volume[1] * volume[2];
// 	  } else {
// 		return tableB;
// 	  }
// 	});
//   }



// array = [5]
let table1 = recVolume(5); // returns a function
// table1 = function == internalVolume
// array = [5, 4]
table1(4); // returns a function
// array = [5,4,3]
console.log(table1(3)); // prints 60
// array = [5,4,3, 145]
console.log(table1(145)); // STILL prints 60

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
