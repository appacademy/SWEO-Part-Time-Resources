/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

let xorSelect = function(arr, cb1, cb2) {
    //create new array variable
    let newArr = []
    // loop through array using standard for loop
    for(let i = 0; i < arr.length; i++){
        let ele = arr[i]
        // check if first call back or second call back passing in each element is true
        // and checking if first and second call back passing in each element are not both true
        if((cb1(ele) || cb2(ele)) && !(cb1(ele) && cb2(ele))){
            // push current element to new array
            newArr.push(ele)
        }
    }
    // return new array
    return newArr
};

// alternative method using filter with same logic as above
// filter returns new array where conditional is true

// let xorSelect = function(array, cb1, cb2) {
//     let selected = array.filter(function(el) {
//       return (cb1(el) || cb2(el)) && !(cb1(el) && cb2(el));
//     });
//     return selected;
//   };






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
