//REST
//The rest parameter allows us to capture ALL incoming arguments, and puts them into an array

//SYNTAX - ...paramName

/*
function sum(x, y, ...allOtherNums) {
    console.log(x + y);
    console.log(allOtherNums);
}

sum(5, 6, true, false, 42, 3700, "My dads boat");
*/

/*
function sayName(firstName, lastName, ...middleNames) {
    let joinedNames = middleNames.join(' ');
    console.log("Hi! " + firstName + ' ' + joinedNames + ' ' + lastName);
}

sayName("Alex", "Bettinger");
*/

//REST parameter should ALWAYS be the LAST parameter

//SPREAD Operator - ...DataTypeName
//In essence it allows you to break down a data type into the elements that make it up
//Acts very similarly to concat

/*
let numArr = [1, 2, 3];

let moreNums = [0, 7, 25, ...numArr, 4, 5, 6];

console.log(moreNums);
*/

//SPREAD AND OBJECT

/*
let colors = { red: "scarlet", blue: "teal" };
let colors2 = { green: "sage", yellow: "mustard" };

let newColors = { ...colors, ...colors2 };

console.log(newColors)
*/
//Spread Arguments
//We can use spread to spread iterable data types into an argument of a function

/*
function speak(verb, noun) {
    console.log("I like to go " + verb + " with " + noun + ".");
}

let words = ["running", "my cat"];

speak(...words);
*/

//DESTRUCTURING
//Allows us to tear apart arrays or objects to more easily access individual elements

//Normally we'd do this: let num = numArr[0];
/*
let numArr = [10, 20];

let [firstEl, secondEl] = numArr;

console.log(firstEl);
console.log(secondEl);
*/

//We can swap variable values using destructuring syntax

/*
let dog = "Hello I'm dog";

let cat = "Hello I'm cat";

[cat, dog] = [dog, cat];

console.log(cat);
*/

//Destructuring Objects
//Instead of [] we use {}

/*
let cat = { name: "King", breed: "shorthair" };

let { name, breed } = cat;

console.log(breed);
*/

/*
let obj = { a: 1, b: 2, c: 3, d: 4 };

let { a, c } = obj;

console.log(a);
*/

//ALIASED OBJECT DESTRUCTURING

/*
let fruits = { apple: "red", banana: "yellow", grape: "purple" };

let { apple: appleColor, banana: bananaColor } = fruits;

console.log(appleColor);
*/

//Destructuring a nested object

/*
let person = {
    name: "Alex",
    pet: {
        name: "King",
        species: "cat"
    }
}
*/

//make a variable named species with the value of the species key

/*
let { pet: { species } } = person;

console.log(species);
*/

/*
let user = {
    userId: 1,
    email: "bob@bob.com",
    name: {
        firstName: "Bob",
        lastName: "Bobert"
    }
}

//Grab the UserID, FirstName, LastName

let { userId, name: { firstName, lastName } } = user;
*/

//Destructuring arrays using rest

/*
let fruit = ["strawbie", "pear", "apple", "grape", "lemon"];

let [firstFruit, secondFruit, ...otherFruits] = fruit;

console.log(firstFruit);
console.log(secondFruit);
console.log(otherFruits);
*/

//Destructuring objects using rest

/*
let obj = { a: 1, b: 2, c: 3, d: 4 };

let { a, c, ...letters } = obj;

console.log(a, c, letters);
*/

//Destructuring parameters

/*
let cat = { name: "King", owner: "Alex", likesTreats: true };

function printOwner({ owner }) {
    console.log("This cat is owned by " + owner);
}

printOwner(cat);
*/

/*
let bigCat = {
    name: "King",
    owner: { name: "Alex" },
    toys: ["ribbon", "mouse"],
    sibling: {
        name: "Freya",
        toys: ["string", "ball"]
    }
}

//Write a function that returns ALL of the toys

function toyFinder({ toys, sibling: { toys: freyasToys } }) {
    let allToys = [...toys, ...freyasToys];
    return allToys;
}

console.log(toyFinder(bigCat));
*/

//Advanced array methods
//FOREACH METHOD
//- touch each element in an array to access or modify in some way

/*
let arr = [1, 2, 3, 4, 5, 6];
let tripledArr = [];

function triple(num) {
    let tripled = num * 3;
    tripledArr.push(tripled);
}
/*
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    triple(num);
}


arr.forEach(triple);

console.log(tripledArr);
*/