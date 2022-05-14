/***********************************************************************
Write a function called `shoppingList(list)`. The shoppingList function will
take in a starting list as an array and return a new function that will allow
us to add to the list. When that return function is invoked with an
argument, it will add the argument to the list and return the list.


Look below to see how this function is invoked:

const groceryList = ['eggs']
//addToGoceryList is a variable that holds the inner function
const addToGroceryList = shoppingList(groceryList); // returns a function

//the inner function inside of addToGroceryList variable will add the item to an array and then return the array result with the original and newly update items.
addToGroceryList('maple syrup'); // returns ['eggs', 'maple syrup']

const clothesList = []
const addToClothesList = shoppingList(clothesList);
addToClothesList('tshirt'); // returns ['tshirt']
addToClothesList('pants'); // returns ['tshirt', 'pants']
console.log(clothesList); // ['tshirt', 'pants']

***********************************************************************/

function shoppingList(list) {
  //1) define your inner function
  const innerFunc = (item) => {
    //3) what does the inner func do for us? what does it return?
    list.push(item);
    return list;
  }

  //2) return the inner function
  return innerFunc;
}


const groceryList = ['eggs']
//addToGoceryList is a variable that holds the inner function
const addToGroceryList = shoppingList(groceryList); // returns a function

//the inner function inside of addToGroceryList variable will add the item to an array and then return the array result with the original and newly update items.
console.log(addToGroceryList('maple syrup')); // returns ['eggs', 'maple syrup']


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = shoppingList;
