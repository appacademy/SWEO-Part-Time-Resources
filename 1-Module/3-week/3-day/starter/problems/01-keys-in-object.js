/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns 
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

function keysInObject(obj) {
  console.log(Object.keys(obj))
  return Object.keys(obj)
  // let myNewArray = []
  // for(let key in obj){
  //   obj[key]
  //   console.log(obj[key])
  //   // myNewArray.push(key)
  // }
  // return myNewArray
}
let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
