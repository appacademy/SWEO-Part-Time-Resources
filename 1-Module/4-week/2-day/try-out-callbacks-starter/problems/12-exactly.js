/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true

*******************************************************************************/
// Write a function `exactly` that accepts an array, a number, and a callback as
// arguments. The function should return a boolean indicating whether or not there are
// exactly `number` elements of the array that return true when passed into the callback.

// Examples:
// write a function that takes an array a number and a callback 
// create a counter variable to keep track of how many trues we get 
// loop through every element of the array 
// check if the element passed into the callback returns true
// if it is true we will increase our counter by one 
// check id counter is equal to the number 
//if sop return true
// else return false


let exactly = function(array, number, cb) {
    // create a counter variable to keep track of how many trues we get
    let counter = 0;
    // loop through every element of the array 
    for(let i = 0 ; i < array.length; i++){
        // check if the element passed into the callback returns true
        let ele = array[i]
        if(cb(ele)){
            counter ++
        }
    }
    // check id counter is equal to the number 
    //if sop return true
    // else return false
    if(counter === number){
        return true
    }
    return false
};
// Examples:
let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = exactly;
