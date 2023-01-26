//OOP - Object Oriented Programming
//Chunkify our code (BLocks of code that are related)


//TDD - Test Driven Development
// Development style in which we write tests first, and then we write code
//to make those tests pass

//Tests should ALWAYS be readable and understandable

//DRY - Don't Repeat Yourself
//WET - Write Everything Twice

//SRP - Single Responsibility Principle
//Every module, function, or block of code should only have one responsibility
//This helps our refactoring, and debugging

//Both DRY and SRP also make our code easier to change.

//Common JS Modules
//File (A module)

//Ideally each module has it's own responsibility

//To make variables or functions that exist in one file available to other
//we must export and import them

//Each module in Node has access to the module object. This object
//hold properties that provide information on the current module

//3 ways to export

/*
1.
module.exports = {}
*/

//2.
// module.exports.hi = hi;
// module.exports.bye = bye;

//3.
// let exports = module.exports
// exports.hi = hi;



function adoptSmallDog(weight1, weight2) {
    let smalldog = findBiggerNum(weight1, weight2) === weight1 ? weight2 : weight2;
    return `I adopted a dog that weighs ${smalldog} pounds.`;
}