//Function Hoisting
//If you would like to go deeper into this please see a/A open week 5 Saturday function hoisting lecture

//function name() {} declaration

//let variable = function() {} expression

//Hoisting function declarations :
//Function declarations get hoisted with their name AND THEIR VALUE
//This means we can call them before declaration - ONLY IF IT'S IN THE SAME SCOPE

// hello();

// function hello() {
//     console.log("Howdy doodle")
// }

//Hoisting function expressions

hello()

var hello = function() {
    console.log("Bing bong")
}