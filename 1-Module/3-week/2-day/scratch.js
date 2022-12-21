//Terminal - Command Line - Console

//A text based system that we use to interact directly with our computer.
//We can use it to create folders/files or even start up applications

//File tree - File structure
//Simply the way in which we store files, so our computer can find them easier


//Important terms

//Directory - Same as a folder and it can contain as many files or folders as we want

//Root - the outermost directory of your computer, denoted by a single /

//Path (file path) - tells the computer which directories to go through to find the file.

// Example : /Desktop/Applications/photos/cat.jpg


//ARROW FUNCTIONS - FAT ARROW FUNCTIONS => 

//Concise way to write a function. You're able to drop a couple keywords, so it's slightly faster to write

/*
//REGULAR FUNCTION EXPRESSION
let sum = function(num1, num2) {
    return num1 + num2;
}


//ARROW FUNCTION SYNTAX

let sum2 = (num1, num2) => {
    return num1 + num2;
}

//If there is only ONE parameter we can drop the parenthesis

let sum3 = num => {
    return num + 2;
}

//If there are NO parameters, we must include parenthesis

let sum4 = () => {
    console.log("Ew david");
}

//Expression: A line of code that returns something
//Statement: Literally any other line of code

//If we have a function with a single expression, and no statements we can omit the return keyword
//If we drop the return, we also have to drop the brackets

let sum5 = num => num + 2;

let sum6 = (num1, num2) => num1 + num2;
*/


//OBJECTS
//Stores values in Key: Value pairs. We use the key to access the value.
//Think of them like real life objects, whereas they have properties
//Keys are almost always strings, while values can be ANY data type

//Object syntax
//let object = {};

let cat = {
    name: "King",
    age: 12,
    color: "black and white",
    likesTreats: true,
    meow: function() {
        console.log("meowwwww");
    }
};

cat.meow();

//Accessing object values

//Dot notation
//cat.name;

//Bracket notation
//cat["name"]

//ADDING values to an object

/*
cat["friendly"] = true;
cat.happy = true;
*/

//NOT PREFERRED

/*
console.log(cat.fat);
console.log(cat.fat === undefined);
*/

//PREFERRED
//IN OPERATOR

//console.log("name" in cat);


