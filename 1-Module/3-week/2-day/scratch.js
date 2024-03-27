// function greeter(name){
//     console.log('Hello', name)
// }

// ARROW FUNCTION
// greeter = (name) => console.log('Hello', name);
// console.log('test 2')

// greeter('Jesse')

// nums = [1,2,3]
// for(let i = 0; i < nums.length; i++){

// }

// map arrow function
// nums.map((num) => {
//    return num + 5
// })

// ONE PARAMETER ARROW FUNCTION
// const addFive = (num) => num + 5
// const addFive = num => num + 5
// console.log(addFive(5))

// MULTIPLE PARAMETER ARROW FUNCTION (2+ PARAMETERS)
// const addNums = (num1, num2) => num1 + num2
// console.log(addNums(1,3))

// ZERO PARAMETER ARROW FUNCTION
// const helloWorldPrinter = () => console.log('Hello World')

// MULTI-LINE EXPLICIT RETURN ARROW FUNCTION
// IF YOU USE CURLY BRACES, YOU MUST USE THE RETURN KEYWORD
// const addFiveMultiply5 = (num) => {
//     let result = num + 5
//     result = result * 5
//     return result
// }

// MULTI-LINE IMPLICT RETURN ARROW FUNCTION USING PARENTHESIS
// const addFive = (num) => (() => {
//     console.log()
//     let sum = 0;
//     sum = sum + num;
//     return sum
// })

// console.log(addFiveMultiply5(5))


// OBJECTS

// let name = 'myName'

// let box = {
//     0:'Boxy',
//     is3D: false,
//     myFunc: () => num + 5
// }

// console.log(box)
// console.log(box[0])
// console.log(box.name)
// console.log(box.is3D)
// console.log(box.myFunc)

//
// let name = 'name'
// let is3D = 'is3D'
// let myFunc = 'myFunc'

// let box = {}
// box[name] = 'Boxy'
// box[is3D] = false
// box[myFunc] = () => num + 5

// console.log(box)
// console.log(box[name])
// console.log(box[is3D])
// console.log(box[myFunc])

// updating/reassigning key/value pairs in an object
// console.log(box[name])
// box[name] = 'Boxie'
// box.name = 'Boxie'
// console.log(box.name)

// delete key/value pair from object
// console.log(box)
// delete box.name
// console.log(box)
