//Lexical scope, lexing time, hoisting, temporal dead zone

//Lexical scope/ Lexing time
/*
When we run a JS file, the parsed once before it actually runs

In lexing time the JS parser figures out variable names and function definitions
During lexing time JS also determines the scope of variables and functions
*/

//Hoisting
//Hoisting is a mechanism in JS where variables and function are HOISTED to the top of their scope
// before execution

//When hoisting variables, JS moves their definition (Without the value) to the top of their scope

//VAR variables are given a value of undefined when they are hoisted
//functions are hoisted with everything in their definition

//Let and const DO NOT get hoisted with undefined

// test()

// function test() {
//     //var hoistedVar = undefined
//     console.log(hoistedVar)

//     var hoistedVar = 10
// }
// console.log(test2)

// var test2 = function() {
//     console.log("Hi")
// }

//The area in which javascript has hoisted a variable, but you cant use them is referred to
//as the temporal dead zone

// function test() {
//     console.log(howdy)


//     let howdy = 'howdy'

// }

// test()