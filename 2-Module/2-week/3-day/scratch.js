//Types of errors in Javscript

//Let's talk about 3

//SYNTAX ERRORS -
//A syntax error is thrown when JS attempts to parse code that is SYNTACTICALLY
//incorrect
// common causes - Missing brackets, parenthesis, or misspelled keywords

//funtion broken() {}
//function missingBrackies() {

//REFERENCE ERRORS -
//MDN Definition - "The referenceError object represents an error when a non-existent variable
//                    is referenced"

// let puppy = "haru";
// console.log(pupy) // Reference error pupy does not exist

//console.log(beepboop)

//TYPE ERROR
//Two most common causes
//1. Operation cannot be performed on the operand ("apple"())
//2. Attempting to modify a value that cannot be changed

//Look up errors if you don't know/ can't remember what they mean
//Look it up in MDN

// ERROR HANDLING

//We can use built in JS errors in our own functions
//Or we can create custom ones

//CREATE some errors

//SYNTAX
//Error Constructor :
// new Error("Message", "Filename", "Line Number")

// let bananaError = new Error("Error Banana Jones has been released from US Custody")

// throw bananaError;

//EXAMPLE

// let newError = new Error("You called King a bean");

// function giveMeNumber(num) {
//     if (typeof num === "number") {
//         console.log("Yuhhhh number")
//     } else {
//         throw newError;
//     }
// }

// giveMeNumber("ahsdakjshd")

// console.log("Yuhhhh")

//If we want to throw an error, but continue program execution
//we will use a try...catch block
//SYNTAX
// try {
//     //Code we want to try
// } catch (error) {
//     //We will throw and then catch an error
//     //(Displays the error, but keeps executing code)
// }

// ...finally
//One more block that we can add to a try..catch block
//

function safeDivide(a, b) {
    if (b === 0) {
        throw new Error("You have broken the law");
    } else {
        return a / b;
    }
}

try {
    console.log(safeDivide(30, 0))
} catch (error) {
    console.log(error.name + ": " + error.message);
} finally {
    console.log("I will literally always run")
}

console.log("Let's continue on")

//Try not to use these as often as possible as it slows down your code

//Instead, try to write DEFENSIVE CODE
//(Check the data type before you do anything with it)

//Testing

//Why do we test?
//Make sure it works!
//Keeps code consistent and helps engineers work together

//Tests as "Specs" = "Specifications"

//TESTING PYRAMID

//E2E - "End to End" : Tests the entire application from top to bottom
// Example : walks through like a user; creating an account, logging, etc.

// Integration Testing : Tests the interactions between 2 pieces of code

//Unit tests - Test ONE piece of code. Theyre the smallest tests. The backbone of tests if you will

//TDD - Test driven development
//Write tests, and then we write code to pass those tests

//RED - tests are failing

//GREEN - tests are passing

//REFACTOR - Make it pretty (make it maintable and easily understandable)
