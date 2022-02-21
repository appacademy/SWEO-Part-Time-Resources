/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
    (optional if you already asked a question for this problem.)
- Explain how you are using both of the callbacks in the function.
- What do you expect each callback function to be returning?
- How many times are you calling each callback function?
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

*******************************************************************************/
//  write a function that takes an array and 2 callbacks 
// create a variable that is equal to anew array 
// loop through every element of my array 
// create a variable that is equal to the single element in isolation
// create a variable that is equal to the result of passing the element into the first callback
// do the same for the second callback 
// check if my first callback variable is true
// if so push the result of the second callback into my new array
// else push the original element into the new array 
// return the new array
let selectiveMap = function(array, cb1, cb2) {
    let myResult = []

    for(let i = 0; i < array.length; i ++){
        let myElement = array[i]
        let firstCB = cb1(myElement)
        let secondCB = cb2(myElement)
        if(firstCB === true){
            myResult.push(secondCB)
        }else {
            myResult.push(myElement)
        }
    }
    return myResult
};
function isEven(n) {
    return n % 2 === 0;
}
function square(n) {
    return n * n;
}
console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = selectiveMap;
