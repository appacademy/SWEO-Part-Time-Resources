// //Function declarations
// function sum(num1, num2) {
//     return num1 + num2;
// }

// //Function expressions

// let sum2 = function(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum2(34, 56));

// sum2 = function(color) {
//     console.log(color);
// }

// sum2("Blue");

// //Arrow function (fat arrow)
// //Generally they are quicker to write

// let sum3 = (num1, num2) => {
//     return num1 + num2;
// }

// //If you only have one parameter you can omit the parenthesis

// let sayHiName = name => {
//     console.log('Hi ' + name);
// }

// //If there are no parameters we do need parenthesis

// let sayHi = () => {
//     console.log('Hello World');
// }

//Expression vs Statement

//Expression is a line of code that RETURNS something

//Statement is any other line of code

//An array -
let array = [1, 2, 3, 4]

//OBJECTS - Another data that generally store related data, unlike arrays they do not use indexes
// to retrieve data from them instead they use keys
//Data is stored in key: value pairs 

// let cat = {
//     name: "King",
//     age: 13,
//     likesTreats: true,
//     color: "black and white"
// }

//console.log(cat)

//Two ways to get stuff out of objects

//DOT NOTATION

//console.log(cat.name)

// //BRACKET NOTATION

// // console.log(cat["name"])


// let cat = {
//     name: "King",
//     age: 13,
//     likesTreats: true,
//     color: "black and white"
// }

// console.log(cat);

// //To add things to an object after creation you can use bracket or dot notation

// cat.friendly = false;

// cat['healthy'] = true;

// //To reassign an existing properties value:
// cat.age = 14

// console.log(cat)

// delete cat.friendly

// console.log("AFTER DELETE", cat)


let cat = {
    name: "King",
    age: 13,
    likesTreats: true,
    color: "black and white",
    meow: function(name) {
        console.log("Meow, " + name);
    }
}

//A method is a function that only exists in an object

cat.meow("Bill")