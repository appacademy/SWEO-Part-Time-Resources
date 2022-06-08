// function declaration
let doubleNum = function (num) {
    return num * 2;
};

// fat arrow function style!

//implicit - valid
let doubleNumArrow = num => num * 2; //implicit return w/o any {} - VALID

//explicit - valid
let doubleNumArrowExplicit = (num) => {
    return num * 2; //explicitly give the return key word 
}

//-------------Arrow Functions------------ 
//What is one ADVANTAGE of arrow functions?
//When we declared an arrow function, the context of that said function will be the code block that we define this arrow function in. (not invoking it, but when we declare it)

//What is one DISADVANTAGE in terms of practical usability that the newer ES2015 have compared to the normal function declaration? (Hint: look up arrow functions on MDN and scroll to the bottom)
//older browsers might not support syntax like the arr functions