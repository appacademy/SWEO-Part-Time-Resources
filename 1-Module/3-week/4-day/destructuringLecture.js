// // // let myArray = ['hello','goodbye','see ya',4,5]

// // // practical use of array destructure, 
// // // a function that takes two numbers
// // // and returns an array where the first element are the numbers added together
// // // and the second is the numbers multiplied
// // let addAndMultiply = function(num1, num2){
// //     return [num1 + num2, num1 * num2]
// // }
// // let [add] = addAndMultiply(2,3)
// // console.log(add)
// // // console.log(multiply)

// // let myArray = ['hello','goodbye','see ya',4,5]
// // let [anything,anything1,anything2] = myArray

// // // let one = myArray[0]
// // // let two = myArray[1]
// // // let three = myArray[2]
// // console.log(anything)
// // console.log(anything1)
// // console.log(anything2)
// // console.log(anything5)


// let myPhone = {
//     color : 'space grey',
//     model : 'Iphone',
//     number : 123456,
//     ringtones: ['normal', 'chirp', 'classic'],
//     myRingtoneFunc : function(ring){
//         console.log(ring)
//     }
// }
// // let myArray = [1,2,3,4,5]
// // for(i in myArray){
// //     let value = myArray[i]
// //     console.log(value)
// // }

// // // let myNewObj = myPhone
// // myNewObj.color = 'Green'

// // // console.log(myPhone)
// // // console.log(myNewObj)

// let {model} = myPhone
// // let myModel = myPhone.model
// // console.log(myNewVariable)
// // console.log(color)
// // console.log(number)
// // console.log(myPhone)

// // let myJSON = {
// //     user : 
// //     {
// //         name : 'Baylen',
// //         pofilepic : 'httpsgiffy.com',
// //         friends : ['some friends array'],
// //         likes : ['a nunch of likes'],
// //         comments : ['a bunch of comments']
// //     },
// //     friends :  {
// //         some: 'info'
// //     }
// // }

// // let {user} = myJSON

// // console.log(user)


// // let myRestFunc = function(string1, stringTwo, ...anything){
// //     console.log(string1)
// //     console.log(stringTwo)
// //     console.log(anything)
// //     for(let i = 0 ; i < anything.length; i ++){
// //         console.log(anything[i])
// //     }
// // }

// // myRestFunc('Baylen', 'Zaviar', {name : 'ben'}, [1,2,3,4], 1234)




// // let arr1 = [1, 2, 3, ...[4,5,6,7]];
// // let arrayTwo = [100, 200, ...arr1]
// // let arrayTwo = [100, 200].concat(arr1)
// // let arr3 = arr1.slice()
// // let arr2 = [...arr1];
// // console.log(arr1); 
// // console.log(arr2);
// // console.log(arr3);
// // // arr2[1] = 100
// // console.log('~~~~~~~')
// // console.log(arr1);
// // console.log(arr2);
// let mySimpleObject = {
//     name : 'Baylen',
//     age : 27
// }
// let mySimpleObject1 = {
//     cohort : 'Jan',
//     age : 38
// }
// console.log(mySimpleObject)
// let myCopy = {...mySimpleObject}
// let myCombination = {...mySimpleObject, ...mySimpleObject1}
// console.log(myCombination)












