/* Dynamic Slice

    Write a function that accepts two numbers, and returns another function that accepts an array.
    The new function, when invoked, should return a copy of a portion of the array between the indices of
    the arguments passed to the first function. Like the built in Array#slice, it should include the 
		"start" index and exclude the "end" index. Do not use the built-in Array#slice method.

    If the start index is less than 0, the returned function should slice from the beginning of the array.
    Similarly if the end index is greater than the length of the array, the returned function should 
		slice up to the end of the array. See below for examples.

    const slicer = dynamicSlice(1, 3);
    console.log(slicer([0, 1, 2, 3])); // prints [ 1, 2 ]

    const slicer2 = dynamicSlice(2, 7);
    console.log(slicer2(['kittens', 'puppies', 'cats', 'dogs'])); // prints [ 'cats', 'dogs' ]

		const slicer3 = dynamicSlice(-10, 2);
    console.log(slicer3([99, 40, 131, 8])); // prints [ 99, 40 ]
*/

//hint: what are the two edge cases they want us to cover for start and end?

//going be a closure problem (inner func access outer func's variables)
function dynamicSlice(start, end) {
    const innerFunc = (innerArr) => {
      //1) edge cases
      let innerStart = start; //setting up innerStart to account for edge cases
      if(start < 0){
        innerStart = 0;
      }

      let innerEnd = end;
      if(end > innerArr.length){
        innerEnd = innerArr.length;
      }

      //2) slicing without slice
      const workingArr = [];
      for(let i=innerStart; i<innerEnd; i++){
        workingArr.push(innerArr[i]);
      }
      return workingArr; //return the result inside the innerFunc

    }
    return innerFunc;
}


const slicer = dynamicSlice(1, 3);
console.log(slicer([0, 1, 2, 3])); // prints [ 1, 2 ]

const slicer2 = dynamicSlice(2, 7);
console.log(slicer2(['kittens', 'puppies', 'cats', 'dogs'])); // prints [ 'cats', 'dogs' ]

const slicer3 = dynamicSlice(-10, 2);
console.log(slicer3([99, 40, 131, 8])); // prints [ 99, 40 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = dynamicSlice;
} catch (e) {
    module.exports = null;
}