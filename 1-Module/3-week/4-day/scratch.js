//REST PARAMETER - ...
//Takes the rest of the arguments in a function call.
//Captures all extra arguments and puts them into an array

//SYNTAX
// function sum(x, y, ...restOfArguments) {};

//IF you use the rest parameter, it should be the LAST parameter

/*
function usingRest(...allArgs) {
    console.log(allArgs);
}

usingRest(1, 2, 3);
usingRest(1, 2, 3, true, false, true, false, 4, 5);
*/

//AGAIN - The rest param can only be the last param
//Let's do this with two parameters

/*
function adder(num1, ...otherNums) {
    console.log("The first number is: " + num1);
    let sum = num1;
    otherNums.forEach(function(num) {
        console.log(num);
        sum += num;
    })
    console.log("The sum is: " + sum);
}

adder(10, 5, 7, 8, 9, 27);
*/

//SPREAD OPERATOR - ...
//Allows us to break down a data type (arrays, orbjects) into the elements that make it up

//SPREADING AN ARRAY
/*
let numArr = [1, 2, 3];

let moreNums = [...numArr, 4, 5, 6];

console.log(moreNums);
*/

//SPREADING AN OBJECT

/*
let colors = { red: "scarlet", blue: "skyblue" };

let newColors = { ...colors };

let colors2 = { green: "sage", yellow: "mustard" };

let moreColors = { ...colors, ...colors2 };
console.log(moreColors);
*/

//SPREADING ARGUMENTS
//We can use the spread operator to spread a data type into the arguments of a function call

/*
function speak(verb, noun) {
    return "I like to go " + verb + " with " + noun + ".";
}

let arr = ["running", "my cat"];

console.log(speak(...arr));
*/


//DESTRUCTURING
//Allows us to tear apart arrays or objects in order to more easily access
//individual elements or properties

//Destructuring into variables
//Destructuring assignment syntax
// Allowsnus to extract parts of an array or object and put them into variables

/*
let numArr = [10, 20, 30, 40];

// NORMAL WAY: let firstEl = numArr[0];
// let secondEl = numArr[1]

//DESTRUCTURING SYNTAX:

let [firstEl, secondEl] = numArr;

console.log(firstEl, secondEl);
*/
//Just like normal variables, you put the name of the variable on the right
//and values on the left
//The position of the variable names directly corresponds to the position of the elements

//Declaring the variables BEFORE destructuring
/*
let dogArr = ["Dusty", "Fluffy", "Doug"]

let dog1, dog2;

[dog1, dog2] = dogArr;

console.log(dog1);
*/

//SWAPPING VARIABLE VALUES
/*
let dog = "dog";
let cat = "cat";

[dog, cat] = [cat, dog];

console.log(dog);
*/

//DESTRUCTURING OBJECTS
//When destructuring objects we use curly braces instead of square brackets

/*
let cat = { name: "king", breed: "shorthair" };

// NORMAL WAY: let catName = cat.name;

let { name, breed } = cat;

console.log(breed);

//This syntax works by matching object properties. Variable name === name property

let obj = { a: 1, b: 2, c: 3, d: 4 };

let { a, c } = obj;

console.log(a);
*/

//Let's look at what we would do if the variable name does NOT match the key name
//(We call this aliased object destructuring) :

/*
let obj = { apple: "red", banana: "yellow", grape: "purple" };

let { apple: newApple, banana: newBanana } = obj;

console.log(newApple);
*/

/*
let cat = { name: "King", owner: "Alex", color: "black and white" };

let { name: kingsName, owner: kingsOwner } = cat;

console.log(kingsOwner);
*/

//Destructuring NESTED objects

/*
let person = {
    name: "Alex",
    pet: {
        name: "King",
        species: "cat"
    }
}

//We want to grab the value of species and put it into a variable

let {
    pet: { species: whatisKing }
} = person;

console.log(whatisKing);
*/
/*
let user = {
    userId: 1,
    email: "bob@bob.com",
    name: {
        firstName: "bob",
        lastName: "bobert"
    }
};

//Let's grab the userId and his first and last name

let {
    userId,
    name: {
        firstName,
        lastName
    }
} = user;

console.log(userId);
*/

//We were just able to create multiple variables using properties of an object very quickly

//Destructuring using REST
//We know that rest gives us the REST of the arguments in an array
/*
function printArgs(firstArg, ...restOfArgs) {
    console.log("THIS IS THE FIRST ARG: " + firstArg);
    console.log(restOfArgs);
}

printArgs("BRO", 1, 2, 3, true, false, "yoyoyo");
*/

//Using rest when destructuring an array

/*
let fruits = ["apple", "pear", "strawbie", "lemon", "lime"];

let [firstFruit, secondFruit, ...restOfFruits] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(restOfFruits);
*/

//DESTRUCTURING OBJECTS USING REST

/*
let obj = { a: 1, b: 2, c: 3, d: 4 };

let { a, c, ...rest} = obj;

console.log(rest)
*/

//DESTRUCTURING PARAMETERS
//We've used destructuring to make variables, but the other main use is to destructure
//incoming PARAMETERS into a function

/*
let cat = { name: "king", owner: "Alex", occupation: "adorable" };

function printOwner({ owner }) {
    console.log("This cat is owned by " + owner);
}

printOwner(cat);
*/

let bigCat = {
    name: "King",
    owner: { name: "Alex"},
    toys: ["ribbon", "mouse"],
    sibling: {
        name: "Freya",
        toys: ["string", "ball"]
    }
}

function toyFinder({ toys, sibling: { toys: freyasToys }}) {
    let allToys = toys.concat(freyasToys);
    return allToys;
}

console.log(toyFinder(bigCat));