// Function Declaration
// hello(); // hello

// function hello() {
//   console.log("hello!");
// }

// Function Expression
// hello(); // Reference Error

// let hello = function () {
//   console.log("hello!");
// };

// Naming your func the same thing as a previously
// declared variable
// let foo = "I'm a variable";

// function foo() {
//   return "I'm a function";
// }

// console.log(foo()); // Syntax Error

// IFFEs
// must wrap in parens to enclose the scope
// the whole point is to only have this func run
// once and never be accessible again.
// Dont forget to invoke it right after the declaration
// so that it will run immediately!

// (function () {
//   console.log("I run immediately");
// })();

// // let hisName = 'andres'

// let greeting = (function(name){
//   return(`Hello, ${name}!`)
// })('Andres');

// console.log(greeting)

// Truthy vs Falsey

console.log([] == false);
console.log([] == true);
console.log({} == false);
console.log('' == false);
console.log(0 == false);

if([]){
  console.log('im truthy')
}

if([].length){
  console.log('second im truthy')
}

// thanks for being inconsistent js!