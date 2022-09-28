// let createObj = {
//     key: "value"
// }

// //how to key into an object
// // console.log(createObj.key)
// console.log(createObj["key"])



// let obj = {
//     name: "Will",
//     occupation: 'Instructor',
//     stockPortfolio: {
//       balance: 1000000,
//       tickers: [
//         "VLO",
//         "TSLA",
//         "AAPL",
//         "MSFT",
//         ]
//     },
//   };
// obj.stockPortfolio.tickers.push("AMC")
//  obj.stockPortfolio.tickers.push("GME")
//  console.log(obj)
//How would I print my name from the object?
// console.log(obj.name)
// console.log(obj["name"])
//How would I add a key of location and assign its value to Texas?
// obj['location'] = "Texas"
// obj.location = "Texas"
// console.log(obj)
//How would I change occupation to CEO?
// obj.occupation = "CEO"
// obj['occupation'] = "CEO"
// console.log(obj)
//How would I add "AMC" to the tickers array?


//Since keys are usually strings, and we'd hate to have to write [''] all the time, we have dot notation.
// let obj = {
//     first: 'a',
//     second: 'b',
//     third: 'c'
//   }

//   console.log(obj.first, obj['first']) //


//Using a variable
// let someVariable = "firstName";
// let some = "second";
// let variable = "Name";
// let time = "FrEQUENcY";

// let obj = {
//   firstName: "Ramen",
//   secondName: "Noodles",
//   frequency: "everyday",
//   firstName: "test"
// };

// console.log(obj[someVariable]); // obj["fistName"]
// console.log(obj.someVariable); //  obj."firstName"  BAD EXAMPLE DONT DO
// console.log(obj[some + variable]); //
// console.log(obj[time.toLowerCase()]); //

// let obj = {
//   firstName: "Ramen",
//   secondName: "Noodles",
//   frequency: "everyday",
// };

//Checking if a key exists
//obj[key] !== undefined
// obj.apple = "Granny Smith"
// console.log(obj)
// console.log(obj.apple !== undefined)

//key in obj
// console.log('apple' in obj)



//Iterating over an Object
// let willObj = {
//     firstName: "Will",
//     lastName: "Duffy",
//     Occupation: "Instructor"
// }

// let willObj = {
//     firstName: "Will",
//     lastName: "Duffy",
//     Occupation: "Instructor"
// }
// //for in loop
// for (let key in willObj){
//     // console.log("HOW MANY TIMES WILL I PRINT?")
//     console.log("apple", key)
//     // console.log("VALUE", willObj[key])
// }


// let willObj = {
//     firstName: "Will",
//     lastName: "Duffy",
//     Occupation: "Instructor"
// }
// // let willKeys = Object.keys(willObj)
// // console.log("KEYS", willKeys)
// // let willValues = Object.values(willObj)
// // console.log("VALUES", willValues)
// let entries = Object.entries(willObj)
// console.log(entries)



//Reference type
// let biff = {
//     type: 'dog',
//     age: 10,
// };

// let buster = biff;
// buster.age = 0;
// //what do you think Biff's age will be?
// console.log(biff, buster)
