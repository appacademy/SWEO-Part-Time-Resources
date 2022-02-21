/***********************************************************************
Write a function called `shoppingList(list)`. The shoppingList function will
take in a starting list as an array and return a new function that will allow
us to add to the list. When that return function is invoked with an
argument, it will add the argument to the list and return the list.


Look below to see how this function is invoked:

const groceryList = ['eggs']
const addToGroceryList = shoppingList(groceryList); // returns a function
addToGroceryList('maple syrup'); // returns ['eggs', 'maple syrup']

const clothesList = []
const addToClothesList = shoppingList(clothesList);
addToClothesList('tshirt'); // returns ['tshirt']
addToClothesList('pants'); // returns ['tshirt', 'pants']
console.log(clothesList); // ['tshirt', 'pants']

***********************************************************************/
// Write a function that takes in an array, and returns a new function
// needs to return a new function 
// inner function takes an argument that is a string 
// so inside the inner function we will take the argument of the outer function which is an array 
// and push in the inner functions argument which is a string
// then return the outer functions argument whish is an array 


// function shoppingList(list) {
//   return innerFunction = (string) => {
//       list.push(string)
//       return list
//   }
//   // return innerFunction
// }
const shoppingList = list => innerFunction = string => list.push(string) ? list : null

const clothesList = []
const addToClothesList = shoppingList(clothesList);
console.log(addToClothesList('tshirt')); // returns ['tshirt']
console.log(addToClothesList('pants')); // returns ['tshirt', 'pants']
console.log(clothesList); // ['tshirt', 'pants']

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = shoppingList;