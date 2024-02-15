//Scope - Who has access to variables

//3 scopes : Global, local, and block

//Variables that are declared in OUTER scopes are accessible by INNER scopes, but variables
// declared in inner scopes are NOT accessible by outer scopes

//GLOBAL SCOPE - widest scope that there is. It's the scope that contains and is accessible
//               by, all other scopes

let apples = "apples"


//LOCAL SCOPE - Inside a function. Variables created within a function only exist within that function

let myScope = 'Global'

function func1() {
    let myScope = 'Local Func1'
    console.log(myScope)
}

function func2() {
    let myScope = 'Local Func2'
    console.log(myScope)
}

// console.log(myScope);
// func1();
// func2();

//BLOCK Scope - Reminder: a block of code in JS is denoted by {}
//Examples include: if conditionals, while, and for loops

// let dog = 'woof';

// if (true) {
//     let dog = 'bowowowow';
//     console.log("INSIDE IF",dog)
// }

// console.log(dog)

//LET - Reassignable, is block and local scope
//CONST - NOT reassignable, is also block and local scope
//VAR - Is horrifying and you shouldn't use it

//You will hear that var is global scoped, but it is actually also function scoped

// let fruit = 'apple';

// fruit = 'pear';

// let dog2;

// const cat = "King";

// cat = "Onyx"


// if (true) {
//     let fruit = 'apple';
//     var fruit2 = 'pear'
// }

// console.log(fruit2)

// let func3 = () => {
//     var fruit4 = 'pears';
// }

// console.log(fruit4)

// let apple = 'apple';

// //let apple = 'apples'

// var fruit = 'pears';

// var fruit = 'apples';

// console.log(fruit);

// const giraffe = 'giraffe';

// let giraffe2 = giraffe.toUpperCase();

// const cat = {
//     name: "King"
// }

// cat.age = 14;

// console.log(cat)

//CLOSURES - a function uses or manipulates a variable that was defined in an outer scope



function sayHi() {
    //let person = 'Jeff';

    function greet() {
        console.log("Hi, " + person)
    }

    greet()
}

let person = 'Marlon'

sayHi()
