// function sayHello(){
// 	console.log('Hello')
// 	return returnedBye
// }

// function returnedBye(){
// 	console.log('Bye')
// }

// // default return = undefined

// let functionVariable = sayHello

// // console.log(functionVariable) // [Function: sayHello]
// // console.log(functionVariable()) // Hello

// function sumFunction(num1, num2, func){
// 	let sum = num1 + num2;
// 	console.log(func) // [Function: sayHello], [Function: retunredBye]
// 	func() // Hello, Bye
// 	return sum
// }

// // console.log(sumFunction(1,1, sayHello)) // 2
// 							 // console.log hello, returnedBye
// console.log(sumFunction(1,1, sayHello())) // hello

// greet('Alex') // Hello, Alex
// // greetExpression('Alex') // Error

// function greet(name) {
// 	console.log("Hello, " + name);
// };


// // expression syntax
// let greetExpression = function (name) {
// 	console.log("Hello, " + name);
// };

// // anoynmous function, big fat arrow a simplified expression syntax,
// // it implicitly returns
// let x = () => {

// }

// greetExpression('Alex') // Hello, Alex



// function mapArray(array){
// 	// expression syntax
// 	return array.map(()=>{
// 		//
// 	})

// 	// declaration syntax
// 	return array.map(function(){
// 		return
// 	})
// }

// mutable types

// 0 -> arr.length -1
// let arr = ['Andres']

// // immutable types

// let number = 2
// let strings = 'a'
// let nan = NaN
// let unde = undefined
// let nu = null


// console.log(strings) // a
// strings = 'ab'
// console.log(strings)

// console.log(number) // 2
// number += 1
// // number = number + (1)
// console.log(number) // 3

// nan = 'empty'
// console.log(nan)

// console.log(arr) // []
// arr[0] = 'Josue'

// console.log(arr) // ['Josue']
// arr[1] = 'Alex'

// console.log(arr) // ['Josue', 'Alex']
// arr[0] = 'Kenneth'
// console.log(arr) // ['Kenneth', 'Alex']

// each of these methods will mutate the array

let arr = [];
let arrayNumber2 = ['a', 'b', 'c', 'd'] // 4 elements


arr.push('p') // ['p']

arrayNumber2.push('x') // ['a', 'b', 'c', 'd', 'x']

console.log(arr) // ['p']
console.log(arrayNumber2) // ['a', 'b', 'c', 'd', 'x']

arrayNumber2.push('y')
console.log(arrayNumber2) // ['a', 'b', 'c', 'd', 'x', 'y']


let poppedValue = arrayNumber2.pop() // 'y'
console.log(poppedValue) // 'y'

console.log(arrayNumber2) // ['a', 'b', 'c', 'd', 'x']

// reverse of push, where it adds an element to the start
// paramaters take in any value
arrayNumber2.unshift('1')
console.log(arrayNumber2) // ['1','a', 'b', 'c', 'd', 'x']

let shiftedValue = arrayNumber2.shift() // '1'
console.log(shiftedValue) // 1
console.log(arrayNumber2) // ['a', 'b', 'c', 'd', 'x']
