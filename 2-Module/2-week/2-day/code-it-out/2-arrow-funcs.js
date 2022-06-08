// function declaration
let doubleNum = function (num) {
    return num * 2;
};

// fat arrow function style!
let doubleNumArrow = num => num * 2; //implicit return w/o any {} - VALID


//What is the one disadvantage that the newer ES2015 have compared to the normal function declaration?
//Advantage: for arrow functions, an advantage is that it allows us use the context bind from where the arrow function is declared
//Disadvantage: older browsers may not support it