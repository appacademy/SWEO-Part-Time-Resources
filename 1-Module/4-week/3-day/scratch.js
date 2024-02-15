//SCOPE 
//Who has access to variables

// 3 SCOPES: 
//GLOBAL SCOPE
//Widest possible scope, and contains and is accessible by every other scope

let apples = 'apples';

//The apples variable is not inside of a function so it's part of the global scope

//The global scope should be avoided as often as possible


//LOCAL SCOPE
//The blocks within functions. So variables that are in local scope are only available
// inside of the function that they were declared in

/*
Variables that functions have access to:
- Any variables in the global scope
- Any variables that were created before the function definition in an accessible scope
- The arguments of the function
- Any variables declared inside the function

*/

//INNER SCOPES have access to variables declared in OUTER SCOPES BUT outer scopes DO NOT
// have access to variables declared in inner scopes

let myScope = 'Global';

function func1() {
    let myScope = 'Local (Func1)';
    console.log(myScope)
}

function func2() {
    let myScope = 'Local (Func2)';
    console.log(myScope);
}

// func1();
// func2();
// console.log(myScope)

//BLOCK SCOPE - Again, a block in Javascript is denoted by {} 
// Examples include: if conditionals, while, and for loops

// let dog = 'woof';

// if (true) {
//     let dog = 'bowowow';
//     console.log(dog)
// }

// console.log(dog)

//let person = 'Jeff';

//CLOSURES - A closure is when an INNER function USES or CHANGES variables that were 
// declared in the outer function.

function sayHi() {
    let person = 'Marlon';

    function greet() {
        console.log("Hi, " + person);
    }
    greet()
}

sayHi()

//VARIABLES DECLARATIONS

//LET - Block & Function scoped, its also reassignable
//CONST - Stands for constant, you CANNOT reassign it. Is also Block & Function scoped
//VAR - Is horrible and you shouldn't use it

//People often say that var is global scoped. Really its global AND function scoped

let apple = 'apple'

apple = 'pear'

const fruit = 'apple'

fruit = 'pear'

var dog = 'dog';
var dog = 'cat'