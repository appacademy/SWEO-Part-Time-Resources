//ARROW FUNCTIONS

// function greeter(name){
//     console.log('Hello', name)
// }

// greeter('Jesse')

// const greeter = (name) => console.log('Hello', name)

// greeter('Jesse')

// nums = [1,2,3]
// nums.map(() => {
//     num + 5
// })

// function addFive(num){
//     return num + 5
// }

// STANDARD ARROW FUNCTION
// const addFive = (num) => num + 5

// ONE PARAMETER
// const addFive = num => num + 5
// MULTIPLE PARAMETERS
// const addNums = (num1, num2) => num1 + num2
// console.log(addNums(1,2))
// NO PARAMETERS
// const sayHelloWorld = () => console.log('Hello World')
// sayHelloWorld()

// MULTI-LINE ARROW FUNCTION WITH EXPLICIT RETURN KEYWORD/CURLY BRACES
// const addFiveMultiplyFive = (num) => {
//     let result = num + 5
//     result = result * 5
//     return result
// }

// SINGLE EXPRESSION ARROW FUNCTION WITH IMPLICIT RETURN
// const addFive = (num) => (
//     num + 5
// )

// console.log(addFive(10))

// OBJECTS


// let name = 'test'

// const box = {
//     name: 'Boxy',
//     myFunc: (num) => num + 5,
//     is3D: false
// }

// console.log(box.name)
// console.log(box.test)

// console.log(box.name)
// console.log(box.myFunc(10))
// console.log(box.is3D)


let name = 'myName'
let myFunc = 'myFunc'
let is3D = 'is3D'
const box = {}
box[name] = 'Boxy'
box[myFunc] = (num) => num + 5
box[is3D] = false

// console.log(box.myName)
// console.log(box.myFunc(10))
// console.log(box.is3D)
// console.log(box[name])
// console.log(box[myFunc](5))
// console.log(box[is3D])

// updating/reassigning key/value pairs
// console.log(box.myName)
// box.myName = 'Boxie'
// console.log(box.myName)

// delete key/value pair from object
console.log(box.myName)
delete box.myName
console.log(box.myName)
console.log(box)
