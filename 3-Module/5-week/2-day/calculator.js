import ADD from "./add.js"; // default export
// import whatever, { substract as minus, multiply, randomNumber } from './subtract.js' // named exports
import * as substractFile from './subtract.js'

// as === alias

ADD(5,5)

substractFile.default(10,10) // default in universal export
substractFile.substract(12, 8) // named exports in universal export

// minus(2,2)
// multiply(3,3)

// whatever(10,10)
// console.log(randomNumber)
