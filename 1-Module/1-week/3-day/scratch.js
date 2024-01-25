// //FUNCTIONS - A block of reusable code (Often customizable)

// let fruit = 'apple';


// console.log("BEFORE DECLARATION")

// //FUNCTION DECLARATION

//Function keyword, function name, parenthesis, squiggly brackets
// function printFruit() {
//     console.log('Apple');
//     console.log('Pear');
//     console.log('Lemon');
// }

// console.log("AFTER DECLARATION")

// //this is a function CALL or a function INVOKATION
// printFruit();

// console.log("AFTER FUNCTION CALL")


//PARAMETERS VS ARGUMENTS

//fruitBoi is a PARAMETER
// function printFruitv2(fruitBoi, fruit2, fruit3) {
//     console.log(fruitBoi)
//     console.log(fruit2);
//     console.log(fruit3)
// }

// //'apple's are ARGUMENTS
// printFruitv2('apple', 'apple', 'apple')


// function sumFunction(x, y) {
//     console.log(x + y)
// }

// sumFunction(5, 5);
// sumFunction(10, 5);


//RETURN STATEMENTS
//Every function in JS returns something, using the RETURN STATEMENT
//We can tell functions what we want them to return, but if we dont, JS will
// BY DEFAULT return undefined
//We may use return so that we can grab stuff OUT of the function and use it later
//We also may use a return statement to end the function

// let fruit = 'apple';

// function sumFunction(x, y) {
//     return x + y;
// }
// console.log(fruit)

// console.log(sumFunction(5, 5)) //10


// function makePassword(password) {
//     return 'BOO' + password + 'BOO' + password
// }

// let hiddenPassword = makePassword('12345'); //'BOO' + password + 'BOO' + password

// console.log(hiddenPassword)


// function randoFunc() {
//     console.log("Hi ");
//     console.log("My name is");

//     return;

//     console.log("Alex")
// }

// console.log(randoFunc())


// CON-CAT-ENATION
//To smash two or more strings together to make one giant string
//Most often you'll see concatenation done with a + sign

//console.log('Hi, my name is ' + 'Alex' + '.')

// let fruit = 'apple';

// console.log('My favorite fruit is ' + fruit);

// let firstHalf = 'Woo today is ';
// let secondHalf = 'so awesome, love it.';

// console.log(firstHalf + secondHalf)


//TEMPLATE LITERALS / TEMPLATE STRINGS
//These are examples of STRING INTERPOLATION


// let cat = "King";

// console.log('My cat is named ' + cat + '.');

// console.log(`My cat is named ${cat}.`);


// function sayHi(name) {
//     console.log(`Welcome back, ${name}.`)
// }

// sayHi('Friend')