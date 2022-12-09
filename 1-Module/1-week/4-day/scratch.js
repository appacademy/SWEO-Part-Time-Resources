//FUNCTIONS
//A function is a REUSABLE block of code. DRY - Don't Repeat Yourself
//WE ONLY WRITE IT ONCE

//Writing a function is known as declaring/ defining a function.

//SUM FUNCTION
// We want to take two numbers, add them together, and give us the result.

//Instead of writing code over & over again, we write a nice function.

//A function declaration begins with the keyword function.
//Inside function parenthesis we pass PARAMETERS

//FUNCTION TEMPLATE
/*
function nameOfFunction(parameters) {
    //BLOCK OF CODE TO EXECUTE
}

nameOfFunction();
*/

//PARAMETERS
//Parameters are comma seperated variables that are put inside of the function declaration.

/*
function sum(number1, number2) {
    console.log(number1 + number2);
}
//ARGUMENTS 
//Arguments are the values passed to the function when it is called.
sum(5, 6);
*/

//String concatenation using variables
/*
let user = "Greg";
console.log("How are you, " + user + "?");
*/

/*
function color(color) {
    console.log("The color is " + color);
}

color("pink");
*/

//RETURN STATEMENTS
//Every function in Javascript returns undefined unless otherwise specified.

/*
function sayNumber(number) {
    return number;
}

let functionNumber = sayNumber(2);
console.log("The result of the function: " + functionNumber);
*/

// {} - Curly Braces  [] - Square Brackets  () - Parenthesis

//CONDITIONALS
//Control flow is the order in which the program will execute instructions.

//IF STATEMENT
//IF a condition is true THEN execute some code.

/*
if (CONDITION TO CHECK) {
    //CODE TO BE EXECUTED
}
*/

/*
if (3 === 2) {
    console.log("Oh my god, its 3");
}
*/

//You can chain additional test statements using ELSE IF statement

//IF statements and ELSE statements DO NOT give us any options of what to do if the condition
//is not met.
//That is why we use ELSE statements

//IF ... ELSE IF ... ELSE

//If all of our TEST STATEMENTS are false, the computer will execute the ELSE statement.

/*
let color = "pink";

if (color === "blue") {
    console.log("the color is " + color);
} else if (color === "orange") {
    console.log(color + " is a dull color");
} else {
    console.log("I don't know what color you gave me.");
}
 */

//You can only have 1 IF statement and 1 ELSE statement, but you can have as many ELSE IF
// statements as you like.

//TRUTHY AND FALSEY VALUES
//Statements in Javascript can be inherently TRUTHY OR FALSEY

/*
if (4 > 3) {
    console.log("truthy?");
} 
*/

//LOOPS
//WHILE loops and FOR loops

//Loops : Will repeatedly execute code until a condition is met.

//WHILE LOOP

//Will execute code WHILE a condition is true.
//Start with the keyword WHILE

//FORMAT :

/*
while (condition) {
    //CODE TO EXECUTE
}
*/

//INDEX
//The INDEX is the traditional word for a variable that keeps track of how many times
//the loop has run

//To keep the while loop from being infinite, we need to meet our condition, in this case
//we need to increment the index to do so.

/*
let index = 0;

while (index <= 10) {
    console.log(index);
    index++;
}
*/

//ARRAY
//A structure that holds multiple different values
//Can consist of different data types.

//ARRAY FORMAT

//let arrayName = ["apple", 1, 2, true, false, undefined];

//FOR LOOPS

// Three main parts
//Initial expression
//The condition
//Loop End Expression

//FORMAT

/*
for (initial Expression; condition; loopEndExpression ) {
    //The code we want to execute
}
*/

/*
for (let index = 0; index <= 10; index += 1) {
    console.log(index);
}
*/

//ARRAYS PT.2

//let numArray = [1, 2, 3, 4, 5];

// One way : console.log([1, 2, 3].length);
// Second way: console.log(numArray.length);

/*
let groceriesArray = ["milk", "eggs", "boat", "tire jack"];

groceriesArray.push("Denise");

console.log(groceriesArray);

groceriesArray.pop();

console.log(groceriesArray);
*/