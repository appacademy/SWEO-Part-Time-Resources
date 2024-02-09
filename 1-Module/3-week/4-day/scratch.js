//Functions in JS can accept more or less arguments than they were expecting and JS won't complain

//REST OPERATOR       ...       
//Takes THE REST of the arguments and put them into an array
//The rest parameter must be the last parameter

// function sum(num1, num2, ...numsArr) {
//     //return num1 + num2;
//     console.log(num1, num2, numsArr)
// }

// sum(4, 5, 5, 6, 7, 8, 8, 7, 9)

// function sumArgs(...numArr) {
//     let sum = 0;

//     for (let i = 0; i < numArr.length; i++) {
//         sum  += numArr[i]
//     }
//     return sum;
// }

// console.log(sumArgs(4, 5, 45, 46, 23, 345, 45677, 234, 34))


//SPREAD OPERATOR     ... 
//The spread operator allows us to break down arrays or objects into the elements that make them up

// let numArr = [1, 2, 3, 4, 5];

// let deepCopyArr = [...numArr];

// deepCopyArr[1] = "blue"

// console.log(deepCopyArr)
// console.log(numArr);

// let nestedArr = [1, 2, 3, 4, 5, [true, true, true]];

// let copyArr = [...nestedArr];

// copyArr[0] = "blue";

// copyArr[5][1] = "pink"

// console.log(copyArr)
// console.log(nestedArr);

// let numArr = [1, 2, 3];

// let copyArr = [4, 5, 6, ...numArr, 4, 5, 6, 7, 8];

// console.log(copyArr)

//We can use the spread operator with objects as well, however you will put it into {}

// let obj = { name: "King", age: 13, likesTreats: true }

// let copyCat = { ...obj }

// copyCat.name = "Apples"

// console.log(copyCat)
// console.log(obj)

// let cat = { name: "King", age: 13, likesTreats: true }

// let catInfopt2 = { friendly: true, healthy: true, cute: true }

// let megaCat = { ...cat, mean: true ,...catInfopt2}

// console.log(megaCat)


// function speak(verb, noun) {
//     console.log('I want to go ' + verb + ' with ' + noun);
// }

// let words = ["running", "Jeff", "blue", "pink"];

// speak(...words)

//Destructuring - Can be done with arrays or objects
//Allows us to very quickly remove items from an array or object and put them into variables


//ARRAYS

// let colorArr = ["red", "orange", "yellow", "green", "blue"];

// //OLD WAY
// // let color1 = colorArr[1];
// // let color2 = colorArr[0];
// // let color3 = colorArr[2];

// //NEW WAY (generally for multiple at one time)

//let [color2 ,color3] = colorArr;

// console.log(color3)

// console.log(colorArr)

let user = { username: "King", email: "king@king.com", password: "password", followers: 100 }

// let username = user.username;
// let password = user.password;
// let followers = user.followers;

let { username, email: userEmail, followers } = user;

console.log(username)