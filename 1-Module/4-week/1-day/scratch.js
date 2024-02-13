//CALLBACKS
//A function that we pass into another function as a parameter

function example(callback) {
    console.log("Before callback");
    callback();
    console.log("After callback")
}


function sayHi() {
    console.log("Hello World");
}

//Make sure to pass in the callback function WITHOUT parenthesis, as that would be 
//passing in the return statement

//example(sayHi)

//We can also pass in anonymous functions straight into the function invokation

// example(() => {
//     console.log("Arrow function")
// })

// example(function () {
//     console.log("Anonymous function")
// })



let sumFunction = (num1, num2, cb) => {
    let sum = num1 + num2;
    
    let result = cb(sum);

    return result;
}

let sumHelper = (num1, num2) => {
    let sum = num1 + num2;

    let result = double(sum);
    return result;
}

function double(number) {
    return number * 2;
}

function triple(number) {
    return number * 3;
}

console.log(sumFunction(5, 5, triple));