/***********************************************************************
You are compiling a price checker for a grocery store. The grocery 
prices are as follows:

butter: $1, eggs: $2, milk: $3, bread: $4, cheese: $5

First, create a function called costOfGroceries(groceries) which takes a 
single array of grocery items and returns the total cost.

Then, write a function mostExpensiveGroceries(groceriesList) that takes 
in a 2-dimensional array of grocery items and returns the index of the 
sub-array with the highest cost.

This problem is worth 7 points. It is possible to get partial points on 
this problem.

Examples:
let groceriesA = ['cheese', 'butter', 'eggs'];
let groceriesB = ['eggs', 'milk', 'bread', 'bread'];
let groceriesC = ['cheese', 'bread'];
let groceriesD = ['eggs', 'butter'];

console.log(costOfGroceries(groceriesA));  // 8
console.log(costOfGroceries(groceriesB));  // 13
console.log(costOfGroceries(groceriesC));  // 9
console.log(costOfGroceries(groceriesD));  // 3

console.log(mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD])) // 1 
console.log(mostExpensiveGroceries([groceriesA, groceriesD])) // 0 
console.log(mostExpensiveGroceries([groceriesA, groceriesD, groceriesC])) // 2 

************************************************************************/

// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

// PLAN!
// Undestand --
//  -- Cost of Groceries:
//     -- This function will accept an array of strings that are grocery items
//     -- should return the cost of all of those items, put together >> total
//     -- where do the prices come from? given list of items and corresponding prices
//     -- check to see what current item is, if butter add 1, if eggs add 2, etc
//     -- when all done, return the total.
//     -- Plan --
//       -- console.log input to see what it is and verify
//       -- determine how to use input to solve problem
//       -- given an array, determine how to loop through and look at each ele
//       -- probably standard for let i loop, inside of loop, lots of if statements
//       -- need a means of tracking total -- maybe let total = 0 at start
// Done!!
// Understand most Expensive:
//  -- Given 2d array, or, an array containing other arrays of groceries, find 
//     the index of whichever list of groceries is most expensive
// Plan:
//  -- First check the input: verify it is what it claims to be 
//  -- how to find most expensive?
//  -- use costOfGroceries to calculate the cost of any list
//  -- but what do we track?
//  -- need to know most expensive or the index thereof
//     -- at least need something to track most expensive index
//  

function costOfGroceries(groceries) {
  // Your code here
  // console.log("Groceries input:", groceries);
  let total = 0;
  debugger;
  for (let i = 0; i < groceries.length; i++) {
    let currentItem = groceries[i];
    // console.log(i +"th item:", currentItem)
    if (currentItem === "butter") total += 1;
    else if (currentItem === "eggs") total += 2;
    else if (currentItem === "milk") total += 3;
    else if (currentItem === "bread") total += 4;
    else if (currentItem === "cheese") total += 5;
  }
  return total;
}

function mostExpensiveGroceries(groceriesList) {
  // Your code here
  // console.table(groceriesList)
  debugger;
  let mostExpensiveIdx = 0;
  let expensiveCost = costOfGroceries(groceriesList[mostExpensiveIdx])
  debugger;
  for (let i = 0; i < groceriesList.length; i++) {
    let currentList = groceriesList[i]
    let currentCost = costOfGroceries(currentList)
    if (currentCost > expensiveCost) {
      mostExpensiveIdx = i;
      expensiveCost = currentCost;
    }
  }
  return mostExpensiveIdx;
}

let groceriesA = ['cheese', 'butter', 'eggs'];
let groceriesB = ['eggs', 'milk', 'bread', 'bread'];
let groceriesC = ['cheese', 'bread'];
let groceriesD = ['eggs', 'butter'];

// console.log(costOfGroceries(groceriesA));  // 8
// console.log(costOfGroceries(groceriesB));  // 13
// console.log(costOfGroceries(groceriesC));  // 9
// console.log(costOfGroceries(groceriesD));  // 3

// console.log(mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD])) // 1 
// console.log(mostExpensiveGroceries([groceriesA, groceriesD])) // 0 
// console.log(mostExpensiveGroceries([groceriesA, groceriesD, groceriesC])) // 2 

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = { costOfGroceries, mostExpensiveGroceries };
} catch (e) {
  module.exports = null;
}