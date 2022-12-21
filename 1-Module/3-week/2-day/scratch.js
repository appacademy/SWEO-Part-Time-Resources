//TERMINAL BASICS

//Terminal, console, command prompt

//A text based system used to craete files, start up applications, and control your computer

//File Structure - File Tree

//- How we organize files, so our computer can find them

//ROOT - Is denoted by a single /
//Outermost folder- main directory

//Important terms;

//DIRECTORY
//Same as a folder, it can hold files or other folders/directories

//PATH - File Path
//How we tell our computer to find a folder/file

//EXAMPLE:    /alexibettinger/Desktop/photos/cat.jpg


//ARROW FUNCTIONS - FAT ARROW FUNCTIONS
//A function declaration denoted by a fat arrow :  =>

//A quicker way to write a function


//OUR REGULAR FUNCTION - DECLARATION

function sum3(num1, num2) {
    return num1 + num2;
}

//FUNCTION EXPRESSION SYNTAX

let sum2 = function(num1, num2) {
    return num1 + num2;
}


//ARROW FUNCTION SYNTAX
//If you only have ONE expression (Specifically with no other statements, or curly brackets)
//You can omit the return statement
//If there is only 1 parameter, you can omit the parenthesis
//However, if we don't have ANY parameters we MUST have parenthesis

//let sum = num => num + 2;
//let sum = () => 2;
//let sum = (num1, num2) => num1 + num2;
/*
let sum = (num1 + num2) => {
    let add = num1 + num2;
    return add;
}
*/

//Expression - A line of code that RETURNS a value
//Statement - Literally any other line of code

//console.log(sum(3));


//OBJECTS!!!
//A data structure that store values in Key: Value pairs
//Unlike arrays where we use the index to access elements, we use the key to access the value
//Keys are almost always strings, while values can be any data type (including other objects)

//OBJECT SYNTAX

//let objectName = {};

/*
let cat = {
    name: "King",
    age: 12,
    color: "black and white",
    likesTreats: true,
    meow: function() {
        console.log("meowwww");
    }
};
*/

//Adding values
//We can use both bracket and dot notation to create new properties

/*
cat.friendly = true;
cat["fat"] = false;
*/

//Accessing values in an object
//Dot Notation

/*
cat.name
console.log(cat.name);
*/

//Bracket Notation
//With bracket notation, we have to put the key in a string

//cat["name"]
//console.log(cat["name"]);

//Best way to see if a value exists inside of an object
//IN OPERATOR

console.log("happy" in cat);
console.log("color" in cat);