/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:


*******************************************************************************/

let reject = function(arr, cb) {
    // create a result array
    // iterate through arr to check if the return of the cb called on the el
    // is false or true.
    // if false, then i want to push that el to my result array
    // return my arr after.

    let result = [];
    for (let i = 0; i < arr.length; i++){
        let el = arr[i];
        if (!cb(el)) result.push(el);
    }
    return result;
};


let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = reject;
