// TypeError
// "Baylen"()
// Reference Error
// if(true){
//   let something = 'String'
// }
// console.log(something)
// SyntaxError
// if (true){
// }
// else{
// }
// RangeError : Callstack size exceeded 
// function foo(){
//   foo()
// }
// foo()



// // 1.
// function sum(array) {

//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }
// try{
//   let res = sum(null);
//   // console.log(res);
// }catch (error){
//   if(error instanceof TypeError){
//     console.error(error.message)
//   }
// }
// // }finally{
// //   console.log("I always run")
// // }

// console.log('SomeCode')





// 2.
// tests
// function sayName(name){
//   if(typeof name === 'string'){
//     console.log(name)
//   }else{
//     throw new TypeError("Invalid name! Must be a string!")
//   }
// }

// try{
//   sayName("Alex");
//   sayName(1);
// }catch (e){
//   console.error(e.message)
// }

// Your code here

// 3.
// function greet(greeting) {
//   if (!greeting) {
//     throw new Error("There was no greeting given.");
//   }

//   console.log(greeting);
// }

// try{
//   greet()
// }
// catch {
//   console.log('Hello, World!')
// }
