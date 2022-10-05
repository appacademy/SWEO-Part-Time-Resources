//Truthy vs true
// let cat = "null"
// if(cat){
//   console.log(cat)
// }

// let func = function(firstArg) {
//   return (function(secondArg) {
//       console.log(firstArg(secondArg));
//   });
// };

// let triple = function(num) {
//   return num * 3;
// }
// let newFunc = func(triple)
// newFunc(9)


// let newFunc2 = func(triple, 9)
// console.log(newFunc2)
// newFunc2(9)


// scope
// global scope
// let animal = 'cow';

// // // local scope (function scope)

// const theAnimal = function(){ // local or function scope
//   let animal = 'dog';
//   // block scope
//   if (true){
//     let animal = 'pig';
//     console.log('in the block scope', animal)

//   }
//   console.log('in the function scope', animal)
// }
// console.log("global scope", animal)

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
//   console.log("GLOBAL:", blockScope)
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
//     }
//   }
//   console.log(car, dogSound, cow, turkey);
// }
// // console.log("TURKEY", turkey)
// // console.log(dogSound)

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
//   }
// 	console.log(test);
// }

// // dontUseVar();
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
const cat = "cat"
if(cat){
  const cat = "dog"
  // cat = "apple"
  console.log("BLOCK:", cat)
}

console.log(cat)
