//Truthy vs true
// let cat = "cat"
// // console.log(cat == true)
// if(cat){
//   console.log(cat)
// }




// scope
// global scope
// let animal = 'cow';

// // local scope (function scope)
// let animal
// const theAnimal = function(){ // local or function scope
//     animal = 'dog';
//   // block scope
//   if (true){
//     let animal = 'pig';
//     console.log('block ', animal)
//       }
//   // animal = "cat"
//   console.log('function ', animal)
// }
// console.log("global ", animal)

// theAnimal();

//------------------------------------------------------------------
// console.log('in the global scope', animal);
// let blockScope = "Global Scope"

// let myFunction = function (functionScope) {

// // let blockScope ="Function Scoped"
//   if (functionScope) {
//     // let blockScope = 'Block Scoped';
//     console.log("BLOCK SCOPE:", blockScope)
//   }
//   console.log("Function:", blockScope)
// };

// myFunction('I am function scoped');


//-----------------------------------------------------------
// let car = 'vroom';
// let turkey = 'gobbledoblle';

// function makeSounds(dogSound) {
//   let cow = 'moo';
//   if (true) {
//     let turkey = 'gobble';
//     for (let i = 0; i < 2; i++) {
//       let turkey = "don't gobble";
//       console.log(car, dogSound, cow, turkey, i);
//     }
//     console.log(turkey)
//   }
//   console.log(turkey)
// }


// makeSounds('woof');


//-----------------------------------------------------------
// let hungry = false;

// function sayHungry() {
//   let hungry = true;
//   if (hungry) {
//     console.log("I'm hungry!");
//   } else {
//     console.log("I'm coding");
//   }
// }

// sayHungry();


//-----------------------------------------------------------

// const dontUseVar = function(){
//   var test = "hello";
//   if(true){
//     var test = "hi";
//   }
// 	console.log(test);
// }

// const useLet = function(){
//   let test = "hello";
//   if(true){
//     let test = "hi";
//     console.log(test);
//   }

// }

// dontUseVar();
// useLet()

//-----------------------------------------------------------
// const dontUseVar2 = function () {
// 	console.log(test);
//   var test = "test";
//   // let test = 'test';
// };

// dontUseVar2();

// let str = 'not apple';
// if (true) {
//   console.log(str);
//   let str = 'apple';
// }


//-----------------------------
//CONST

// let - allows reassignment, block scoped

// let num = 5;
// num = 3;
// console.log(num);

// const - does not allow reassignment, block scoped

// const num = 5;
// num = 3;
// console.log(num);

//---------------------------------------
// let cat = "cat"
// const cat = "cat"
// if(cat){
//   const cat = "dog"
//   // cat = "apple"
//   console.log("BLOCK:", cat)
// }

// console.log(cat)
