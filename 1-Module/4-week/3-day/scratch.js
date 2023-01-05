//TERNARY OPERATORS
//Used in place of if else statements

//SYNTAX

// condition ? expression (do this if true) : expression (do this if false)

/*
let fruit = "apple";

//fruit === "apple" ? console.log("its an apple") : console.log("idk");

fruit === "apple" ? console.log("apple") : fruit === "pear" ? console.log("pear") : console.log("idk");
*/

//MinValueCallback Practice

/*
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.
*/

/*
let arr = [4, 8, 34, 12, 7, 2]

function minValueCallback(array, cb) {
    let min = null;
    for (let i = 0; array.length; i++) {
        let el = array[i];
        if (el < min || min === null) {
            min = el;
        }
    }
    if (cb === undefined) {
        return min;
    } else {
        return cb(min);
    }
}
*/

//Greater callback value
/*
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.
*/

function greaterCallbackValue(val, cb1, cb2) {
    let result1 = cb1(val);
    let result2 = cb2(val);

    if (result1 > result2) {
        return result1;
    } else {
        return result2;
    }
}

/*
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
no more than `max` elements of the array that result in true when passed into the callback.
*/

//console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));

/*
function atMost(arr, max, cb) {
    let count = 0;
    arr.forEach(function(el) {
        if (cb(el)) {
            count++;
        }
    });
    return count <= max;
}
*/