// // Variables declared without a value will be assigned 'undefined' by default
// let myVariable;
// console.log(myVariable)
// myVariable = "some value"
// console.log(myVariable)



// // Undefined and other falsy values will fail if conditionals
// if(undefined) {
//     console.log('hello')
// } else {
//     console.log('goodbye')
// }

// if(!0) {
//     console.log('hello')
// } else {
//     console.log('goodbye')
// }



// // You can't create a variable named "null", but you can call a variable 'undefined'
// let null = "hello"
// let undefined = "hello"



// // A function that doesn't return anything will implicitly return 'undefined' by JavaScript
// function isGreaterThanFive(num) {
//     if(num > 5) {
//         return true
//     }
// }



// // typeof Examples:
// console.log(typeof undefined) // Prints: undefined
// console.log(typeof null) // Prints: object
// console.log(typeof false) // Prints: boolean
// console.log(typeof NaN) // Prints: number




// // Comparing different falsy values with strict and loose equality
// Undefined comparisons
// console.log(undefined === undefined) // Prints: true
// console.log(undefined == undefined) // Prints: true

// console.log(4 === "4") // false
// console.log(4 == "4") // true
// console.log(Number("four") == 4)

// console.log(NaN === NaN) // print: false
// console.log(NaN == NaN) // print: false

// console.log(undefined === null) // print: false
// console.log(undefined == null) // print: true
// console.log(undefined == 0) // print: false

// console.log(false === false) // print: true
// console.log(false == false) // print: true

// console.log(false === null) // prints: false
// console.log(false == null) // prints: false
// console.log(true == null) // prints: false
