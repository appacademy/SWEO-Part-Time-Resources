
// function myFunction(someParam) {
//     console.log(someParam)
// }


// let myFunction = function(someParam){
//     console.log(someParam)
// }


// myFunction('Baylen')

// myFirstFunction(1,2)


// function myFirstFunction(param1, param2){
//     console.log('First')
//     console.log(param1 + param2)
// }





// let myFirstFunction = function(param1, param2){
//     console.log('second')
//     console.log(param1 + param2)
// }

//var
// const withVar = () => {
//     console.log(animal);
//     var animal = "Cat";
//     console.log(animal);
//   };
  
// withVar(); // undefined
  
//   //const
  
//   const withConst = () => {
//     console.log(animal);
//     const animal = "Dog";
//   };
  
// withConst(); // Reference Error

// function declaration

// hello(); // hello

// function hello() {
//   console.log("hello!");
// }

// function expression

// hello(); // Reference Error

// let hello = function () {
//   console.log("hello!");
// };

// function expression with var

// console.log(hello)
// hello(); // Type Error

// var hello = function () {
//   console.log("hello!");
// };

// function declaration with var

// var foo = "I'm a variable";

// (function foo(num) {
//     if (num ===5){
//         return 
//     }
//     console.log(foo(num -1)); // I am a variable
//   return "I'm a function";

// })()

// console.log(foo); // I am a variable
// console.log(foo()); // I am a variable

// // function declaration with let/const

// let foo = "I'm a variable";

// // function foo() {
//   return "I'm a function";
// }



// (
//     () => {
//         console.log('Baylen wrote this')
//     }
// )()
// (
//     function (num1) {
//         console.log(num1)
//         console.log('Baylen wrote this')
//     }
// )()
// const user = {
//     name : 'Baylen',
//     age : 27
// }

// console.log(user)


// let someButtonPress = 2; // could be dynamic 

// (function(number) {
//     user.age = user.age / number;
// })(someButtonPress)

// console.log(user)

// const func = () => {
//     if(num %2 !== 0 ){
//         // ()()
//     }
// }


// falsy values
// 0
// -0
// ""
// null
// undefined
// false -- boolean
// NaN
// 0n
// let myArr = []

// if(myArr.length === false){
//     console.log(true)
// }else{
//     console.log(false)
// }





// function someFunction() {
//     console.log(myVariable)
    
//     if(true) {
//         if(true) {
//             if(true) {
//                 if(true) {
//                 var myVariable = 'Something'
//                 let somethingElse = 'Another'
//                 if(true){
//                     console.log(somethingElse)
//                 }
//             }
//         }
//     }
//     console.log(myVariable)
    
// }
    
    
    
// }

// someFunction()



// falsy values
// 0
// -0
// ""
// null
// undefined
// false -- boolean
// NaN
// 0n

// // 0 // falsy
// const func = () => 0
// // console.log(0 === false)
// console.log(func)
// if(func){
//     console.log(true)
// }else{
//     console.log(false)
// }

// console.log(typeof true)
// console.log(typeof 'Anything')












(
    (num1) => {
    console.log('I am inside my iife', num1) 
    }
)(10);

(
    function(num2){
    console.log('I am inside my iife too', num2) 
    }
)(20)













