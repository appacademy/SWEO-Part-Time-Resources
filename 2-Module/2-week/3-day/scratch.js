//Types of errors in Javascript
//SyntaxError
//ReferenceError
//TypeError
//RangeError
//InternalError
//EvalError
//URIError

//SYNTAX ERRORS
// Errors of the syntax of the code - Most commonly thrown when we have missing brackets
// or parenthesis or if we've spelled a keyword wrong

//funtion broken() {}
//function broken() {


//REFERENCE ERRORS
//Occur when we try to reference a variable that doesn't exist
//Or we spell the variable name wrong

// console.log(bubbles);
// let puppy = "puppy";
// console.log(pupy)


//TYPE ERRORS

//Operation cannot be performed on the operand (as it is the wrong data type)
//Attempting to modify a value that cannot be changed

// let num = 42;

// num()

//IF YOU DONT RECOGNIZE IT, LOOK IT UP
//First try mdn

//ERROR HANDLING
//We can use built in errors in our own functions
//We can also create our own custom errors

//Creating custom errors
//We have an error constructor in JS that helps us create error object instances

//SYNTAX

// new Error(message, filename, line number)
//We can also set it equal to a variable if we want to reuse it

// let newError = new Error("Error: Banana Jones has escaped US Custody");

// function isBananaJonesFree(bool) {
//     if (bool === true) {
//         throw newError;
//     } else {
//         console.log("thank god that menace is behind bars")
//     }
// }

// isBananaJonesFree(false)

// console.log("Running from Banana Jones")


//TRY...CATCH BLOCKS
//Helps us by throwing an error and then CONTINUING execution

//SYNTAX

// try {
//     //Code we want to try
//     console.log(google)
// } catch (error) {
//     //We want to display the error
//     console.error
// }

//...FINALLY
//Finally will run whether or not an error was thrown

function safeDivide(a, b) {
    if (b === 0) {
        throw new Error("WHOA WHOA WHOA, uhhhh. Wrong?")
    } else {
        return a / b;
    }
}

try {
    console.log(safeDivide(30, 0));
} catch (error) {
    console.error(error.name + ": " + error.message);
} finally {
    console.log("I will always run")
}

console.log("HOWDY")