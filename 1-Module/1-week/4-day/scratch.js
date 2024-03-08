// ----------------- CONDITIONALS (If statements) --------------------

// function coinToss(side) {
//     // if (side === "heads" ) {
//     //     console.log("You won the coin toss")
//     // } else if (side === "tails") {
//     //     console.log("You lost the coin toss")
//     // } else {
//     //     console.log("You broke the coin")
//     // }

//     // if(side === "heads") {
//     //     console.log("You won")
//     // }

//     // if(side === "tails") {
//     //     console.log("You lost")
//     // }
// }

// coinToss("asdf")



// function ageCategory(age) {
//     if(age > 70) {
//         console.log("You are an elder")
//     } else if(age > 45) {
//         console.log("You are middle aged")
//     } else if(age >= 18) {
//         console.log("You are a legal adult")
//     } else if(age < 18) {
//         console.log("You are a minor")
//     }

//     if(true) {
//         console.log('Hello world')
//     }
// }

// ageCategory(65)


// ----------------- LOOPS (While vs For loops) --------------------
// // While Loop
// let counter = 0

// while(counter < 5) {
//     console.log("hello world")
//     counter++
// }


// let condition = true

// while(condition) {
//     console.log("hello")
//     condition = false
// }


// // also check out the "do... while" statement on MDN
// while(true) {
//     console.log('hello')
//     break
// }



// For Loop

// for(let counter = 0; counter < 5; counter++) {
//     console.log('hello')
// }


// // You can write a for loop like this:
// let i = 0

// for(; i < 5;) {
//     console.log("hello world")
//     i++
// }
// // but please don't.


// let catNames = ["Riley", "Tom", "Mittens", "Garfield"] // length of 4

// for(let i = 0; i < catNames.length; i++) {
//     let currentCatName = catNames[i]
//     console.log(currentCatName)
// }



// -------------------------------- ARRAYS -----------------------------------
// variable
// let fruit = "apple"
// let fruit = true
// let fruit = 123
// let fruit = undefined
// let fruit

// // arrays
// let pineapple = "pineapple"
// let fruits = ["apple", pineapple, 123, NaN, [1, 2, 3], "apple"]

// function printFruits(fruitsArray) {
//     for(let i = 0; i < fruitsArray.length; i++) {
//         console.log(fruitsArray[i])
//     }
// }

// printFruits(fruits)

// similar to strings, indexOf works with arrays
// console.log(fruits.indexOf("pineapple"))

// // length of array:
// console.log(fruits.length)

// // Use index, starting at 0, to get elements of an array
// console.log(fruits[5])


// let string1 = "Hello "
// let string2 = "World"

// console.log(string1 + string2)

// let array1 = ["Hello", "World"]
// let array2 = ["Goodbye", "World"]

// console.log(array1 + array2, array1, array2)

// let array3 = [1, 2, 3]
// let array4 = [4, 5, 6]

// console.log(array3 + array4)


// let array5 = [1, 2, 3]
// let string3 = "hello"

// console.log(array5.concat(string3))
// console.log(array5 + " " + string3)


// let colors = ['red', 'orange', 'blue']
// console.log("colors 1:", colors)


// // Adding elements to an array
// colors.push("yellow")
// console.log("colors 2:", colors)

// colors.unshift("purple")
// console.log("colors 3:", colors)


// // Removing elements from an array
// let yellow = colors.pop()
// console.log(yellow)
// console.log("colors 4:", colors)

// let purple = colors.shift()
// console.log(purple)
// console.log("colors 5:", colors)


// let location = "Los Angeles"
// console.log(location.slice(0, location.length - 1))
// location = "Brazil"
// console.log(location.slice(0, location.length - 1))


// let locations = ["Los Angeles", "New York", "Brazil"]
// console.log(locations.slice(1))
