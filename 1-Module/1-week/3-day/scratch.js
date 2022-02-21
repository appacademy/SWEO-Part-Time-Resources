// Conditionals if, else if, else
// function conditionalDemonstration(string){
//     if(string === 'dog'){
//         console.log('You passed in a dog')
//     }
//     else if(string === 'cat'){
//         console.log('You passed in a  cat')
//     }   
//     else if (string === 'snake'){
//         console.log('You passed in a snake')
//     }
//     else {
//         console.log('I dont understand that animal')
//     }

// }

// conditionalDemonstration('dog')
// conditionalDemonstration('rabbit')
// conditionalDemonstration('cat')


// function doSomeMathFunction(num1,num2,operator){
//     if(operator === '+'){
//         return num1 + num2
//     }
//     else if (operator === '-'){
//         return num1 - num2
//     } else {
//         return 'I dont understand that operator'
//     }
// }


// console.log(doSomeMathFunction(187, 156, '*'))


// loops, basic for and while loop

// function myWhileLoop(string){
//     let i = 0

//     while(i < string.length){
//         console.log(string[i], i)

//         i++
//     }
// }


// myWhileLoop('Baylen')


// function doesMyNameHaveAnA(name){
//     let i = 0
//     let amIDone = true
//     while(i < name.length){
//         if(i === 10000){
//            amIDone = false
//         }
//         console.log(i)
//         i++
//     }
// }

// console.log(doesMyNameHaveAnA('Baylen'))



// function myForLoop(string){


//     for(let i = 0; i < string.length; i++){
//         console.log(string[i])
//     }
// }

// myForLoop('Zaviar')





// Arrays .concat, indexOf look at mdn for all of the array methods  
// Info to know
// An array holds a ORDERED LIST of data
// We can call each item in an array an element
// Index starts at 0
// function consoleLogger(string){
//     console.log(string)
//     return string
// }


// let myArray = [1,2,3,4]
// console.log(myArray[0])
// console.log(myArray)
// myArray[0] = 'baylen'

// console.log(myArray[0])
// console.log(myArray)
// let myArray2 = [5,6,7,8]
// let myArray3 = [9]

// myNewArray = myArray.concat(myArray2, myArray3)
// console.log(myNewArray,myArray,myArray2,myArray3)

// for(let i = 0; i < myArray.length; i++){
//         if(i === myArray.length -1){
//             myArray[i]('Baylen inside the loop')
//         }
//         console.log(myArray[i])

// }



// let array1 = []

// array1.push(1)
// console.log(array1)
// array1.push(2)
// console.log(array1)
// array1.push(3)
// console.log(array1)
// array1.push(4)
// console.log(array1)
// array1.push(5)
// console.log(array1)

// let myVariable = array1.pop()

// console.log(myVariable)
// console.log(array1)