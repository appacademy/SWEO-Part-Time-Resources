let globalScope = "this is global scope";

// let myFunc = function(arg){
//   let functionScope = "this is function scope";
//   if(true){
//     let blockScope = "this is block scoped";
//   }
//   console.log({functionScope, globalScope, arg, blockScope});
// }

// myFunc("this is also function scoped");


// let firstName = "James";

// let nameFunction = function(){
//   // let firstName = "Sarah";
//   if(true){
//     // let firstName = "William"
//     console.log(firstName);
//   }
// }
// nameFunction();

// console.log(__dirname);

// const num = 5;
// const newNum = num + 2
// console.log({new: newNum, num: num});

// const dontUseVar = function(){
//   var test = "hello";
//   if(true){
//     var test = "hi";
//   }
//   console.log(test);
// }

// dontUseVar();

const dontUseVar2 = function(){
  // var test = undefined;
  console.log(test);
  let test = "test";
}

dontUseVar2();
