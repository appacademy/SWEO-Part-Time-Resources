// console.log(__dirname);

// let globalScoped = "I am globally scoped";

// let myFunc = function(arg){
//   let functionScoped = "I am function scoped";

//   // let globalScoped = "pretender";


//   if(true){
//     let blockScoped = "I am block scoped";
//   }

//   // console.log(blockScoped);
// }

// myFunc('I am also function scoped');

// let firstName = "William";

// function greet(){
//   let firstName = "Tom"
//   firstName = "Greg";

//   if(false){
//     let firstName = "Phillip";
//     console.log(firstName);
//   }

//   console.log(firstName);
// }

// console.log(firstName);
// greet();


// let is good - allows mutation

//const is amazing - doesn't allow mutation

//var is literally the cause of the downfall of modern civilization.

// let myNum = 5;
// myNum = 3;
// myNum = 1;
// console.log(myNum); //3

// const myNum = 5;
// myNum = 3;
// console.log(myNum); //error

// const person = {};

// person.first = 'William'
// person.last = "Vincent";

// console.log(person);


function dontUseVar(){
  var test = 'hello';

  if(true){
    var test = "nope";
  }
  console.log(test);
}

function varIsBad(){
  console.log(test);
  var test = "im a test";
}

varIsBad();
