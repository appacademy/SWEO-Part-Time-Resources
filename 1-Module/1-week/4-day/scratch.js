//FUNCTIONS

//A reusable block of code that runs when called.
//Writing a function is known as a function declaration/definition

//Ex: function without parenthesis

/*
function sayHi() {
    console.log("hello");
}

sayHi();
*/

//A function that takes two numbers and adds them together & gives us the result.
//PARAMETERS are comma seperated variables that are passed inside of a function declaration.
//ARGUMENTS are the values that we pass when we call the function (invoke).

/*
function sum(num1, num2) {
    console.log(num1 + num2);
}

sum(3, 6);
*/

/*
let blue = "blue";

function sayColor(color) {
    console.log("The color is: " + color);
}

sayColor(blue);
*/

/*
function sayNumber(number) {
    console.log("This is inside the ")
}

let functionNumber = sayNumber(2);

console.log(functionNumber);
*/

/*
function addNum(num) {
    num += 2;
    console.log(num);
}

let hashedPassword = addNum(5);

console.log(hashedPassword);
*/

// [] - SQUARE BRACKET  {} - CURLY BRACKET  () - PARENTHESIS

//CONDITIONALS
//IF STATEMENT .. ELSE IF STATEMENT .. ELSE STATEMENT

//TWO PARTS
//TEST EXPRESSION - THEN EXPRESSION (DO THIS EXPRESSION)

/*
if (CONDITION) {
    //CODE TO BE EXECUTED
}
*/

/*
if (3 === 4) {
    console.log("oh my god its threeee");
}
*/

//ELSE IF - You can chain additional IF statements using ELSE IF

//IF statements and ELSE IF statements DO NOT provide an option if the condition is false
//Thats why we would use an ELSE statement

/*
let color = "orange";

if (color === "pink") {
    console.log("the best color is " + color);
} else if (color === "blue") {
    console.log("okay well " + color + " is fine.");
} else {
    console.log("I have no idea color you gave me");
}
*/

//TRUTHY and FALSEY values

//ARRAYS 
//Used to store multiple different values. Similar to a list

//let arrayName = ["rtwe", 2, 3, true, false, [1, 2, 3]];

/*
let groceries = ["milk", "sugar", "tire", "boat"];

console.log(groceries.concat(["cat", "fish"]));
*/


//LOOPS
//A loop will execute code as long as a condition is true.

//WHILE LOOPS

/*
while (CONDITION TO MET) {
    CODE TO EXECUTE
}
*/

//INDEX
//The index is the traditional word used for a variable that keeps track of how many 
// iterations the loop has run.

/*
let index = 0;

while (index <= 10) {
    console.log(index);
    index++;
}
*/

//FOR LOOPS
//3 important pieces to a FOR LOOP
//1. Initial expression
//2. Condition
//3. loop end expression

//for (initial expression; condition; end expression)

/*
for (let index = 0; index <= 10; index++) {
    console.log(index);
}
*/