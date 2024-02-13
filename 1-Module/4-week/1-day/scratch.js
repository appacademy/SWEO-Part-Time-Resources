//CALLBACKS
//A function that is passed into another function as an argument

let example = function(callback) {
    console.log("Before the callback");
    callback(); //sayHi()
    console.log("After the callback");
}

let sayHi = () => {
    console.log("Hello World")
}

//We are not adding parenthesis onto the function, because that would pass in the return statement
//example(sayHi)

let sumFunction = (num1, num2, cb) => {
    let sum = num1 + num2;

    let result = cb(sum); 

    console.log(result);
}

let double = (number) => {
    return number * 2;
}

let triple = (number) => {
    return number * 3;
}

sumFunction(5, 5, triple);

sumFunction(5, 5, (number) => number * 4);

//A helper function is when we call a function (NOT A PARAMETER) inside of another function

let sumFuncHelper = (num1, num2) => {
    let sum = num1 + num2;

    let result = double(sum); 

    return result;
}