// -------------------------------- CONDITIONALS (If statements) --------------------------------
// Ex 1: Coin flip function
// function coinFlipElseIf(side) {
//     if (side === 'head') {
//         console.log("You won the coin flip")
//     } else if (side === 'tail') {
//         console.log("You lost the coin flip")
//     } else {
//         console.log("You broke the coin")
//     }
// }

// console.log(coinFlipElseIf("head")) // => Prints "You won the coin flip" and "You broke the coin"
// console.log(coinFlipElseIf("tail")) // => Prints "You lost the coin flip" and "You broke the coin"
// console.log(coinFlipElseIf("asdf")) // => Prints "You broke the coin"

// function coinFlipIfs(side) {
//     if (side === "head") {
//         console.log("You won the coin flip")
//     }

//     if (side === "tail") {
//         console.log("You lost the coin flip")
//     }

//     console.log("You broke the coin")
// }

// console.log(coinFlipIfs("head")) // => Prints "You won the coin flip"
// console.log(coinFlipIfs("tail")) // => Prints "You lost the coin flip"
// console.log(coinFlipIfs("asdf")) // => Prints "You broke the coin"


// // Ex 2: Age Categorization
// function categorizeAgeElseIf(age) {
//     if (age > 70) {
//         console.log("You are an elder")
//     } else if (age > 50) {
//         console.log("You are middle aged")
//     } else if (age >= 18) {
//         console.log("You are a legal adult")
//     } else if (age < 18) {
//         console.log("You are a minor")
//     }
// }

// categorizeAgeElseIf(65) // => Prints "You are middle aged"


// function categorizeAgeIfs(age) {
//     if (age > 70) {
//         console.log("You are an elder")
//     }

//     if (age > 50) {
//         console.log("You are middle aged")
//     }

//     if (age >= 18) {
//         console.log("You are a legal adult")
//     }

//     if (age < 18) {
//         console.log("You are a minor")
//     }
// }

// categorizeAgeElseIf(65) // => Prints "You are middle aged" and "You are a legal adult"



// -------------------------------- LOOPS (While and For loops) --------------------------------

// // While Loop

// let i = 0;
// while(i < 5) {
//     console.log('hello world')
// }


// // For Loop
// for(let i = 0; i < 5; i++) {
//     console.log('hello world')
// }

// // Technically, you can a for loop like this:
//     let i = 0

//     for(; i < 5;) {
//         console.log('hello world')
//         i++
//     }
// but don't. please

// While loops are useful when you don't know how many loops you need (like in recursion)
// For loops are preferred when you do know how many loops



// ------------------------------------------ ARRAYS ------------------------------------------
// // variables can only hold one "thing"
// let catName = "Olive likes tuna fish."
// catName = 1
// catName = true

// // arrays can hold many "things". Each thing is called an "element"
// let myCatName = "Sianna"
// let catNames = ["Olive", "Riley", "Blue", myCatName, 123, false, undefined]


// // Arrays and for loops are very often used with each other:
// function sayCatNames(nameArr) {
//     // for(let i = 0; i < nameArr.length; i++) {
//     //     if(nameArr[i] === "Blue") {
//     //         console.log("Found the cat")
//     //     }
//     // }

//     // let indexOfBlueCat = nameArr.indexOf("Blue")
//     // console.log(nameArr[indexOfBlueCat])
// }

// sayCatNames(catNames)


// let array1 = [1, 2, 3]
// let array2 = [4, 5, 6]

// console.log(array1.concat(array2.slice(1)))

// // Using the string concatenation method will turn the array into a string
//     // It might not break your code, but it's not good to turn one data type into another
//     // Unless you really do mean to do it
// console.log(array1 + "," + array2)


// built in sorting
// array.sort()
