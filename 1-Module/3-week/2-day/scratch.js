
// let myObj = {
//     apple: "Granny Smith",
//     key2: 1
// }


// //how to key into an myObj
// console.log(myObj.apple)
// console.log(myObj["apple"])



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
// console.log(obj)

//How would I print my name from the object?
// console.log(obj["name"])
// console.log(obj.name)
//How would I add a key of location and assign its value to Texas?
// obj.location = "Texas"
// obj["location"] = "Texas"
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
// };
// // obj.newKey = "THIS IS NEW"
// // console.log(obj)
// // console.log(obj[someVariable]); // obj["fistName"]
// console.log(obj.someVariable); //  obj."firstName"  BAD EXAMPLE DONT DO
// console.log(obj[some + variable]); //
// console.log(obj[time.toLowerCase()]); //

// let obj = {
//   firstName: "Ramen",
//   secondName: "Noodles",
//   frequency: "everyday",
// };

//Checking if a key exists
// console.log(obj.firstName)
// if(obj[key] !== undefined){
//     //DO XYZ
//     obj[key] = "NEW VALUE"
// }

// console.log(obj.apple !== undefined)

//key in obj
// console.log('firstName' in obj)



// //Iterating over an Object
// let willObj = {
//     firstName: "Will",
//     lastName: "Duffy",
//     Occupation: "Instructor"
// }

// // // //for in loop

// for (let key in willObj){
//     let value = willObj[key]
//     // console.log(value)
//     // console.log("HOW MANY TIMES WILL I PRINT?")
//     console.log("KEY", key)
//     console.log("VALUE", value)
// }


// let willObj = {
//     firstName: "Will",
//     lastName: "Duffy",
//     Occupation: "Instructor"
// }
// let willKeys = Object.keys(willObj)
//  console.log("KEYS", willKeys)
// let willValues = Object.values(willObj)
// console.log("VALUES", willValues)
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
// console.log(biff.age, buster.age)
