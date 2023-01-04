//CALLBACKS
//A callback is a function that is passed into another function call

/*
let example = function(callback) {
    console.log("Before the callback");
    callback()
    console.log("After the callback");
}

/*
let sayHi = function() {
    console.log("Hiiiii")
}

example(sayHi);


example(function() {
    console.log("Hiiiiiiii");
})
*/

/*
function sum(num1, num2, cb) {
    let sum = num1 + num2;
    return cb(sum);
}

function double(num) {
    return num * 2;
}

function triple(num) {
    return num * 3
}

console.log(sum(2, 4, double));
console.log(sum(3, 6, triple));
*/

function sum(num1, num2, cb) {
    if (cb === undefined) {
        return num1 + num2;
    } else {
        return cb(num1 + num2)
    }
}