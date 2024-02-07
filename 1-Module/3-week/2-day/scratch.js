
// //Function declaration
// function sum(num1, num2) {
//     return num1 + num2;
// }

// //Function expression

// let sum2 = function(num1, num2) {
//     return num1 + num2
// }

// //Arrow function, fat arrow function =>

// let sum3 = (num1, num2) => {
//     console.log("SUM 3", num1 + num2)
// }

// sum3(45, 567)

// sum3 = (color) => {
//     console.log(color)
// }

// sum3("Blue")
// //If there is only one parameter, we can omit the parenthesis

// let funcExample = param => {
//     console.log(param)
// }

// //But if you have zero parameters you MUST have them

// let sayHi = () => {
//     console.log("Hello world")
// }

// sayHi();

//Expression vs Statement

//Expression - A line of code that returns something

//Statement - Any other line of code (that doesn't return something)

//OBJECTS - Another data structure that stores related values (generally)

// let cat = {
//     name: "King",
//     age: 13,
//     color: "black and white",
//     likesTreats: true
// }

// //console.log(cat)

// //Accessing values within an object

// //DOT NOTATION

// // console.log(cat.name)

// // //BRACKET NOTATION

// // console.log(cat["likesTreats"])
// // console.log(cat["name"])


// //I can use bracket or dot notation to add new properties and values onto an object
// console.log(cat)

// cat.friendly = false;

// cat["healthy"] = true;

// console.log(cat)

// console.log(cat.happy)

// //To delete a key/property
// delete cat.friendly;

// //We can reassign the values of objects

// cat.age = 14;

// console.log(cat)

// let cat = {
//     name: "King",
//     age: 13,
//     color: "black and white",
//     likesTreats: true,
//     meow: function() {
//         console.log("Meow")
//     }
// }

// //The meow function is special because it only exists on the CAT object
// //So it is called a METHOD
// //In order to call a method we have to use DOT NOTATION

// cat.meow();
   