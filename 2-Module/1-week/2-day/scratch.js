//OOP
//Object-Oriented Programming

//TDD
//Test Driven Development
//A way of developing code by writing tests first. Those tests should FAIL.
//We write the code to make tests pass.

//Reading tests
//Tests should ALWAYS be readable and understandable

//DRY - Don't Repeat Yourself! DO THIS
//WET - Write Everything Twice! NOT THIS

//Look out for patterns in your code, as you may be able to refactor it without those patterns

//Makes code easier to change

//SRP - Single Responsibility Principle

//Every module or function or block or ANYTHING ELSE BROTHER, should have it's own responsibility
//    -Refactor to make more helper functions


//Common JS Modules
//Each js file is a module
//We would ALWAYS prefer to have multiple modules (WITH THEIR OWN RESPONSIBILITY)
//In order to make variables or functions that are defined in one file
//accessible to another file, we must export and import them


//Three ways to export

//1. 
//module.exports = {}

//2.
// module.exports.hi = hi;
// module.exports.bye = bye;

//3.
//exports.hi = hi;

//Each module in Node has access to a "Module" object
//This object contains info on the current file/module

//One of these properties is the module.exports property
//Used to export items from the current module

//How to use
// Assign a new object to the module.exports property
// Give the new object a property for each function or variable that we want to export

function hi(name) {
    console.log(`Hi, ${name}`)
}

function bye() {
    console.log("Bye Brother")
}


// module.exports = {
//     hi,
//     bye
// }

// module.exports.hi = hi;
// module.exports.bye = bye;

//Node made this - let exports = module.exports
//You can ONLY use dot notation on the exports variable

exports.hi = hi;