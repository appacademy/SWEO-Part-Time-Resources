/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

***********************************************************************/

function arrayConverter(array) {
  // your code here
  let obj = {}
  for(let i = 0; i < array.length; i++){
    let key = array[i]
    // if(!(key in obj)){
    if(obj[key] === undefined){
      obj[key] = 1
    } else{
      obj[key]++
    }
  }
  return obj
}

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
