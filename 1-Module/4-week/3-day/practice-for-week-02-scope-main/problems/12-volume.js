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


***********************************************************************/

// function recVolume(height) {
// 	let width, length;
// 	return function(arg) {
// 	  if (width === undefined) {
// 		width = arg;
// 		return recVolume(height);
// 	  }
// 	  else if (length === undefined) {
// 		length = arg;
// 		return height * width * length;
// 	  }
// 	  else {
// 		return height * width * length;
// 	  }
// 	}
// }

function recVolume(height){
	const measurements = [height]

	return function measure(measurement){

		if(measurements.length < 3){
			measurements.push(measurement)
		}

		if(measurements.length === 3){
			return measurements.reduce((acc, cur) => acc * cur)
		} else {
			return measure
		}
	}
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
