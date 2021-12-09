// console.log(__dirname);


// let globallyScoped = "I am globally scoped"

// function myFunc(arg){
//   let functionScoped = "I am function scoped";

//   if(true){
//     let blockScoped = "I am block scoped";
//     functionScoped = 'yellow'
//   }
//   console.log(functionScoped);
// }

// myFunc();


// let firstName = "William";

// let greet = function(){
//   // let firstName = "Tom";

//   if(true){
//     // let firstName = "Phillip";
//     console.log(firstName);
//   }
// }

// greet();


// let - allows reassignment, block scoped

// let num = 5;
// num = 3;
// console.log(num);

// const - does not allow reassignment, block scoped

// const num = 5;
// num = 3;
// console.log(num);


// const person = {};
// person.firstName = "William";
// person.lastName = "Vincent";

// console.log(person)

// var - the worst, dont use, bad

// const dontUseVar = function(){
//   var test = 'hello';

//   if(true){
//     var test = "nope";
//   }

//   console.log(test);
// }

// dontUseVar();


const varIsBad = function(){
  //var test;
  console.log(test);
  // let test = "test";
};

varIsBad();
