console.log("-------------What is scope?-------------")
let getAverage = function(...argsArr){
    let total = 0;
    for(let i=0; i<argsArr.length; i++){
        let arg = argsArr[i];
        total += arg;
    }
    //what variables or functions are available for this line of code? (can be called)
    console.log("totalIsAvailable:", total);
    // console.log("argIsAvailable:", arg); //no this line of code does not have access to arg
    
    return total / argsArr.length;
}
// console.log(getAverage(10,20,30)); // 60 / 3 --> 20
// console.log(getAverage(100, 0)); // 100 / 2 --> 50
console.log(getAverage(20, 20, 20, 20, 20, 20, 20, 20)); //  --> 20

console.log("-------------Global Scope-------------")
//this line belongs to the global scope. what available variables does this line have?
console.log("getAverage:", getAverage);


console.log("-------------Different Scope Examples-------------")
let globalScope = 'I am globally scoped' //this line belongs to the global scope

let myFunction = function(functionScope){
  let alsoFunctionScope = "I am also function scoped" 
  //this line belongs to the function scope

  if(true){
    let blockScope = 'I am block scoped' //this line belongs to the block scope
    
  };

//   console.log(blockScope); //this function scope, does not have access to the block scope's variable `blockScope`.

//   if(false){
//       let blockScope = 'I am a variable in a different block'
//   }
};

myFunction("I am function scoped");


console.log("-----------another example----------")
let car = "vroom"; //car is defined inside global scope






//from 46 to 53 these lines belong to the global scope.

function makeSounds(dogSound) {
  let cow = "moo"; //cow is defined inside function scope

  if (true) {
    let turkey = "gobble"; //turkey is defined inside block scope

    for (let i = 0; i < 2; i++) { //another for loop block inside of if(true) block
      console.log(car, dogSound, cow, turkey, i);
    }
  }
  
//   console.log("fromFunctionScope:", i); //can't find 'i' in my scope for this line.
}
makeSounds("woof");

console.log("-----------another example 2----------")

let hungry = false; //defined in the global scope

function sayHungry() {
//   let hungry = true; //defined in the function scope
  if (hungry) { //hungry is being called, but where is hungry defined?
    console.log("I'm hungry!");
  } else {
    console.log("I'm coding");
  }
}

sayHungry();



console.log("-----------Let vs. Const. vs. Var----------")
let helloWorld = function(){
    if(true){
        console.log("inside block scope:", blockStr);
        // let blockStr = "apple"; //cannot access let or const before defined
        var blockStr = "not apple"; //hoisted to the top and declared but NOT assigned a value; so it will yield undefined if trying to access before assignment.
    }
    console.log("inside function scope:", blockStr);
}

helloWorld();

console.log("-----------When to use Const or Let?----------")
//const use everywhere first
//if you need to reassign change const to let
//never use var.
// const counter = 0; const won't allow reassignment
let counter = 0;
counter++; //counter = counter + 1;
console.log(counter);

//if we have const we have predictability. We know that
//our variables will not be reassigned unless we want it to.
//this leads to less bugs!!!!