// let globalVar = 'I am a global variable';

// let myFunc = function(arg){
//   let functionVar = "I am function or local scoped";
//   if(true){
//     let blockVar = "I am scoped to a block";
//     console.log({globalVar, functionVar, blockVar});
//   }
// }

// myFunc();

// let firstName = "Bob";

// let myFunc = function(){
//   // let firstName = 'James';
//   if(true){
//     // let firstName = "Sarah";
//     console.log(firstName);
//   }
// }


// myFunc();

// console.log(__dirname)
// let lastName = "People have last names";

// let function1 = function(){
//   let firstName = "William";
// }

// let function2 = function(){
//   let lastName = 'Vincent';
// }

// function1();
// function2();

// console.log(lastName);


// const myArr = [1,2,3];
// myArr.forEach(function(el, i, arr){console.log(el, i, arr)})
// myArr.push(4);

// const myNum = 5;
// const myNewNum = myNum + 2
// console.log(myNewNum);


// const dontUseVar = function(){
//   var test1 = "hello";
//   if(true){
//     var test1 = 'hi';
//   }
//   console.log(test1);
// }

// dontUseVar();

const tdz = function(){
  var test = undefined;
  console.log(test);
  var test = 'things and stuff';
}
tdz();
