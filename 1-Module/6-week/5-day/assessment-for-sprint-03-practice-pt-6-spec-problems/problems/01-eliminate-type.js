/***********************************************************************
Write a function called `eliminateType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept a string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with all elements
of the specified type removed.

Examples:

const smallEliminate = eliminateType([1, 'one', 2, 'two', 3, 'three']);
smallEliminate('number'); // ['one', 'two', 'three']
smallEliminate('string'); // [1, 2, 3]

const eliminate = eliminateType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
eliminate('number'); // [undefined, 'world', { color: 'red' }, true, [4, 5], 'hello', false]
eliminate('object'); // [2, undefined, 'world', true, 3, 'hello', false]


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
Write a function called `eliminateType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept a string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with all elements
of the specified type removed.
***********************************************************************/
// right a function that takes in an array
// return an anon function that takes a string as a param
// create a new array inside my inner function
// loop over my array, and check the type of each element
// create a variable for each element in isolation
// if the type of the current element is not equal to my param type.
// I will push that element into my results array
// return my array 
//
// function eliminateType(arr) {
//   return (string) => {
//     let result = []
//     for(let i = 0; i < arr.length; i++) {
//       let ele = arr[i]
//       if(typeof ele !== string){
//         result.push(ele)
//       }
//     }
//     return result
//   }
// }
// function eliminateType(arr) {
//   return (string) => {
//     let newArr = arr.filter(ele => {
//       return typeof ele !== string
//     })
//     return newArr
//   } 
// }
// let eliminateType = (arr) => (string) => arr.filter(ele => typeof ele !== string)
// function eliminateType(arr) {
//     return (type) => {
//       if(arr.length === 0){
//         return []
//       }
//       if(typeof arr[0] === type){
//         return eliminateType(arr.slice(1))(type);
//       }else{
//         return [arr[0]].concat(eliminateType(arr.slice(1))(type))
//       }
//     }
// }
// function eliminateType(arr) {
//     return (type, result = [], i=0) => {
      
//       if(i === arr.length){
//         return result
//       }
//       let ele = arr[i]
//       if(typeof ele !== type){
//         result.push(ele)
//       }
//       // console.log(result)
//       return eliminateType(arr)(type, result, ++i)
//     }
// }
// const smallEliminate = eliminateType([1, 'one', 2, 'two', 3, 'three']);
// console.log(smallEliminate('number')); // ['one', 'two', 'three']
// console.log(smallEliminate('string')); // [1, 2, 3]
// console.log(([1,2,3,4,5].at(-1)))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = eliminateType;
} catch {
  module.exports = null;
}