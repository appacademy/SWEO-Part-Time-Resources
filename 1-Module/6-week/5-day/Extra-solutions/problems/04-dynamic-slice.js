/* Dynamic Slice

    Write a function that accepts two numbers, and returns another function that accepts an array.
    The new function, when invoked, should return a copy of a portion of the array between the indices of
    the arguments passed to the first function. Do not use the built-in Array#slice method.

    If the start index is less than 0 the returned function should slice from the beginning of the array.
    Similarly if the end index is greater than the length of the array, the returned function should
    slice up to the end of the array. See below for examples.

    const slicer = dynamicSlice(2,4);
    console.log(slicer([0, 1, 2, 3])); // prints [ 2, 3 ]
    console.log(slicer([2, 4, 'hello', false])); // prints ['hello', false]

    const slicer2 = dynamicSlice(-2, 10);
    console.log(slicer2([0,1,2,3])); // prints [0, 1, 2, 3]
*/

function dynamicSlice(start, end) {
    if (start < 0) {
        start = 0;
    }
    return function (array) {
        const newArray = [];
        for (let i = start; i < end && i < array.length; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = dynamicSlice;
} catch (e) {
    module.exports = null;
}