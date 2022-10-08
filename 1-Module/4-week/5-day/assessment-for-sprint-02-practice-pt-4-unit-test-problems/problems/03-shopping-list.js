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

function shoppingList(list) {
  // Your code here
// console.log(list)

  return function (item)  {

    list.push(item)

    return list
  }
}

const groceryList = ['eggs']
const addToGroceryList = shoppingList(groceryList); // returns a function
console.log(addToGroceryList('maple syrup')); // returns ['eggs', 'maple syrup']


const clothesList = []
const addToClothesList = shoppingList(clothesList);
console.log(addToClothesList('tshirt')); // returns ['tshirt']
console.log(addToClothesList('pants')); // returns ['tshirt', 'pants']
console.log(clothesList); // ['tshirt', 'pants']
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = shoppingList;
