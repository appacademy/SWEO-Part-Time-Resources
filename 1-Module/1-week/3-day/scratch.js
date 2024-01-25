//FUNCTIONS - A block of code that is reusable (Often customizable)

//let fruit = 'apple';

//KEY WORD FUNCTION then functions NAME followed by parenthesis and squiggly brackets

//THIS IS A FUNCTION DECLARATION
// function printFruit() {
//     console.log('pear');
//     console.log('apple');
//     console.log('lemon')
// }

//In order to use a function we need to "Call" or "invoke" the function

//THIS IS A FUNCTION CALL
// printFruit();
// printFruit();
// printFruit();


//PARAMETERS VS ARGUMENTS

//let fruit = 'apple';

//On line 25 fruit is a PARAMETER
// function printFruit(fruitBoi) {
//     console.log(fruitBoi)
// }

//On line 32, "pear" is an ARGUMENT
// printFruit('pear');
// printFruit('apple');
// printFruit();


// console.log(5 + 4);
// console.log(6 + 7);
// console.log(57 + 34);

// function sumFunction(x, y) {
//     console.log(x + y)
// }

// sumFunction(7, 9);
// sumFunction(10, 5);
// sumFunction(3, 4);


//RETURN STATEMENTS
//Every function EVER returns something
//We can tell functions what we want them to return BUT IF WE DONT Javascript will return UNDEFINED


// function sumFunction(x, y) {
//     return x + y;
// }

// console.log(sumFunction(5, 5))

//THE VALUE OF THE FUNCTION CALL IS THE RETURN STATEMENT

// function whatAmIReturning() {
//     return "Howdy"
// }

// console.log(whatAmIReturning())

// let fruit = 'apple';
// console.log(fruit)
//THE RETURN KEYWORD ENDS THE FUNCTION

// function returnGuy() {
//     console.log("Hello!");
//     console.log("My name is ");

//     return;

// }

// returnGuy()
// console.log("Function ended.");


// function mathEquationGuy(x, y) {
//     let result = x + y;
//     return result;
// }

// let resultOfFunction = mathEquationGuy(5, 5) //10;

// console.log(resultOfFunction)


//CON CAT ENATION
//When we take two strings and smash them together

// let firstHalf = 'Hi, my name is ';
// let secondHalf = 'Alex';

// let fullString = firstHalf + secondHalf

// console.log(fullString)

// function sayHi(name) {
//     console.log("Hello, " + name)
// }

// sayHi("Bryan")


//TEMPLATE LITERALS / TEMPLATE STRINGS
//Another form of concatenation
//STRING INTERPOLATION

// let cat = "King";
// let age = 14;

// console.log(`My cat's name is ${cat}, and he is ${age} years old.`);

