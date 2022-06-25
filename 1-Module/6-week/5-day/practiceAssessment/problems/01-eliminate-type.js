/***********************************************************************
Write a function called `eliminateType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept a string that could be any of the following types:

The return function should return a copy of the input array with all elements
of the specified type removed.

// - 'object'
// - 'number'
// - 'string'
// - 'boolean'
// - 'undefined'

Examples:

Hint: Remember Polya's problem solving framework!

1. Understand the problem
  * Read the problem carefully
  * Make sure you understand the examples
  * What should the returned function do?
  * Is this similar to any problems you have solved before?

2. Come up with a plan
  * Break this down into simpler steps
  * How would you write a function that eliminates all numbers from an array?
  * How would you write a function that eliminates all strings from an array?
  * How would you write a function that eliminates all booleans from an array?
  * How would you write a function that takes an array and a type and removes all values of the given type?
  * How do you write a function that returns a function?

3. Execute the plan
  * It may help to implement the intermediate steps from your plan first
  * It may help to try a brute-force solution first

4. Reflect, debug, test, refactor
  * If your tests aren't passing try coming up with your own test inputs
  * If your brute-force solution passess tests, try refactoring for simplicity
  * It's possible (not mandatory) to solve this in 1-3 lines of code!


Run tests on just this file by typing `npm test test/01-eliminate-type-spec.js`
on the command line.

***********************************************************************/

// filter solution
// function eliminateType(arr) {
//   const innerFunc = (type) => {
//     return arr.filter(el => typeof el !== type)
//   }

//   return innerFunc;
// }

// For Loop solution
// const eliminateType = arr => {
//   return (type) => {
//     let res = [];
//     for (let i = 0; i < arr.length; i++){
//       let el = arr[i]
//       if (typeof el !== type){
//         res.push(el)
//       }
//     }
//     return res;
//   }
// }


// Recursive solution
// Cannot mutate the arr because this is a closure. Closures are a combo of a function 
// and the lexical environment within which that function was declared. The lexical
// environment consists of the variables and their values within this function. In the
// first example below the smallEliminate variable is just referring to a specific call of
// the eliminateType function, so when we make a function call to smallEliminate we 
// are accessing the same lexical environment each time. If we mutate our arr in one of 
// those calls, it's going to be updated and changed in the lexical environment and therefore
// will still be that mutated version of itself once we call smallEliminate again.

const eliminateType = arr => {
  const innerFunc = (type, res = [], index = 0) => {
    if (arr.length === index) return res;

    let el = arr[index];
    if (typeof el !== type){
      res.push(el);
    }
    return innerFunc(type, res, index + 1);
  }
  return innerFunc;
}

const smallEliminate = eliminateType([1, 'one', 2, 'two', 3, 'three']);
console.log(smallEliminate('number')); // ['one', 'two', 'three']
console.log(smallEliminate('string')); // [1, 2, 3]

// const eliminate = eliminateType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
// console.log(eliminate('number')); // [undefined, 'world', { color: 'red' }, true, [4, 5], 'hello', false]
// console.log(eliminate('object')); // [2, undefined, 'world', true, 3, 'hello', false]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = eliminateType;
} catch {
  module.exports = null;
}