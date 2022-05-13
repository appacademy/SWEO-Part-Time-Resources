console.log("----------------scope reminder----------------")
// scope = what variables are available for any given line in a javascript program.
// 3 major scopes = global scope, local/function scope, block scope

//how to determine which scope the variable belongs to?
//step1: find which line of code the variable is defined at
//step2: what scope does that line belong to? (global, local, block, )

let globalScope = 'I am globally scoped' //this variable belongs to this global's scope

let myFunction = function(functionScope){
  let alsoFunctionScope = "I am also function scoped" //this variable belongs to this function's scope

  if(true){
    let blockScope = 'I am block scoped' //this variable belongs to this block's scope
  };
};
//tinted car window analogy. Inner can 'see' the outside; but outside cannot see what's inside.

console.log("----------------Simple Counter----------------")

let counter = 0;

//build a function "updateCounter" that when invoked, it will increase the counter by one each time

// --------YOUR CODE HERE---------

// updateCounter(); //counter === 1
// updateCounter(); //counter === 2
// updateCounter(); //counter === 3
// updateCounter(); //counter === 4
// console.log("simple counter: " + counter); // 4

console.log("----------------What is a closure?----------------")
/*

*/

console.log("----------------Creating a Counter Closure----------------")

//1) create a higher order function `counterFactory` (takes in no paramters) that will initialize a `counter2` variable and set it to 0. 

//2) Then build an inner function `updateCounterInner` inside `counterFactory` to update that counter by 1 each time the inner function is called. In `updateCounterInner` return the counter variable at the end.

//3) the higher order func `counterFactory` should return that inner function `updateCounterInner`.

// -------------YOUR CODE HERE-------------


// console.log(counterFactory) //not invoked; what do you think will be logged?
// console.log(counterFactory()) //() invoked; what do you think will be logged?

// const updateCounterInside = counterFactory();
// console.log("from counter2:", updateCounterInside())
// console.log("from counter2:", updateCounterInside())
// console.log(counter2); //will this work?


console.log("----------------Favorite Food Factory----------------")
//1) build a higher order function called `favoriteFoodDB` that will take into its parameter a prefix. 

//2) inside the favoriteFoodDB: initialize an empty array that will hold a list of foods

//3) inside the favoriteFoodDB: DEFINE and RETURN an inner function (call it `innerFunc`) that will take in a food as its parameter and adds the food to the favFoods array (how do we add things to an array?)
    // - remember to return the `innerFunc`

//4) inside the `innerFunc`: after pushing the food into the favFoods array, return the prefix with the favFoods after joining it with comma separated spaces. (see example below);

// -------------YOUR CODE HERE-----------

// const addFood = favoriteFoodDB("My favorite desserts are ") //--> returns the `innerFunc` inside and stores it in the `addFood` variable.
// console.log(addFood("wings")); //My favorite desserts are wings
// console.log(addFood("burgers")); //My favorite desserts are wings, burgers
// console.log(addFood("chicken sandwiches")); //My favorite desserts are wings, burgers, chicken sandwiches