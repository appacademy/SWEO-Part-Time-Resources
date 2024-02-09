//Javascript functions will accept more or less arguments than it's expecting and it wont complain

// function sum(num1, num2) {
//     return num1 + num2
// }

// console.log(sum(5, 6, 8, 8, 8, 8, 8, 8, 8, 8))

//REST Operator     ...   
//Grabs all additional arguments and puts them into an array
//

// function sum(num, ...argsArray) {
//     let sum = num;

//     for (let i = 0; i < argsArray.length; i++) {
//         sum += argsArray[i]
//     }
//     console.log(sum)
// }

// sum(5, 8, 9, 9, 9, 9, 4, 45, 23, 56, 34, 34, 5, 46, 24, 45, 35, 23, 67, 345)


//SPREAD Operator also ... 
//Allows us to break down a data type into the elements that make it up
//Allows us to make DEEP COPIES

// let numArr = [1, 2, 3, 4, 5];

// let copyArr = [6, 7, 8, 9, ...numArr, 23, 45, 67]

// //copyArr[1] = "true"

// console.log(numArr)
// console.log(copyArr)

// let nestedArr = [1, 2, 3, 4, 5, [true, false, true, true]]

// let copyArr = [...nestedArr]

// copyArr[1] = "blue";

// copyArr[5][1] = "pink"

// console.log(nestedArr)
// console.log(copyArr)

// let catObj = { name: "King", age: 14, likesTreats: true }

// let catCopyObj = { ...catObj, friendly: true, healthy: true };


// delete catCopyObj.name

// console.log(catObj)
// console.log(catCopyObj)

// function speak(verb, noun) {
//     console.log('I like to go ' + verb + ' with ' + noun);
// }

// const words = ["running", "Jeff"];

// speak(...words)

//Destructuring - Allows us to break apart arrays or objects and more easily access 
//               individual elements

// let colorArray = ["red", "orange", "yellow", "green", "blue"];

// // let green = colorArray[3];
// // let blue = colorArray[4];
// // let red = colorArray[0];

// //let [color1, color2] = colorArray;

// let color1, color2, color3, color4;

// color1 = colorArray[0];

// [color2, color3] = colorArray;

// console.log(color1)
// console.log(color2)
// console.log(color3)

// You can skip values with an empty comma

//Destructuring with objects
// ARRAYS = []            OBJECTS = {}

let user = { username: "King10", email: "king@king.com", password: "password", followers: 100 }

//INSTEAD OF THIS:
// let username = user["username"]

// let userEmail = user["email"]

//WE CAN DO THIS:

let { password, email: userEmail } = user;

console.log(userEmail)

console.log(user)