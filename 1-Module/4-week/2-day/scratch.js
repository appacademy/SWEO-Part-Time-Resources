//CALLBACKS
//A function that is passed into the arguments of another function.

/*
let example = function(callback) {
    console.log("Before callback");
    callback();
    console.log("After callback");
}


let sayHi = function() {
    console.log("Hii");
}

//example(sayHi);

example(function() {
    console.log("Hiiii");
});
*/

/*
function sum(num1, num2, cb) {
    let sum = num1 + num2;
    let result = cb(sum);
    return result;
}

function double(num) {
    return num * 2;
}

function triple(num) {
    return num * 3;
}

console.log(sum(2, 4, double));
console.log(sum(3, 6, triple));
*/

//If we JUST want to return the sum!

/*
function sum(num1, num2, cb) {
    if (cb === undefined) {
        return num1 + num2;
    } else {
        return cb(num1 + num2);
    }
}

function double(num) {
    return num * 2;
}


console.log(sum(2, 4, double));
console.log(sum(2, 4));
*/