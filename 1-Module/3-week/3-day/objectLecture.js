
// test
//  What is an object??
// real life object 
// phone
// -- color
// -- number
// -- model 
// --ringtones

let myObj = {
    name :'Baylen',
    1 : 'something else'
}

// let myPhone = {
//     color : 'space grey',
//     number : 12345,
//     model : 'iphone 11',
//     ringtones : ['chirp', 'classic', 'song'],
//     1 : 1234,
//     'array' : [1,2,3,4,5],
// }
// console.log(myPhone.color, myPhone.number, myPhone.model, myPhone.ringtones)

// let something = 'number'
// console.log(myPhone['color'])
// console.log(myPhone[something])
// console.log(myPhone[2])
// console.log(myPhone.myInnerObj.name)
// let myPhone = {
//     color : 'space grey',
//     number : 12345,
//     model : 'iphone 11',
//     ringtones : ['chirp', 'classic', 'song'],
//     1 : 1234,
//     'array' : [1,2,3,4,5],
// }
// let myKeyChecker = function (key){
//     // console.log(myPhone[key])
//     // if(myPhone[key] !== undefined){
//     //     console.log(myPhone[key])
//     // }
//     if(key in myPhone){
//         console.log(myPhone[key])
//     }else{
//         console.log('that key does not exist')
//     }
// }
// myKeyChecker('IdontExist')
// myKeyChecker('color')
// myKeyChecker('shape')
// myKeyChecker('ringtones')



// let myColorUpdater = function(someColor){
//     myPhone['color'] = someColor
// }

// let myModelUpdater = function(key, newModel){
//     myPhone['someNewKey'] = newModel
// }
// myModelUpdater('model', 'Iphone 12' )
// console.log(myPhone)
// console.log(myPhone)
// myColorUpdater('MyNewColor')
// console.log(myPhone)
// console.log(myPhone)
// myPhone['color'] = 'Blue'
// console.log(myPhone)


let myPhone = {
    color : 'space grey',
    number : 12345,
    model : 'iphone 11',
    ringtones : ['chirp', 'classic', 'song'],
    1 : 1234,
    2 : 3456,
    'array' : [1,2,3,4,5],
}
// for in loop
for(key in myPhone){
    let myValue = myPhone[key]
    console.log(myValue)
}
// Object.keys
// console.log(Object.keys(myPhone))
let myKeyArray=Object.keys(myPhone)
// for(let i = 0; i < myKeyArray.length; i++){
//     let myKey = myKeyArray[i]
//     console.log(myPhone[myKey])
// }
// Object.values
console.log(Object.values(myPhone))
// Object.entries
console.log(Object.entries(myPhone))


