/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/
//takes in an array, for each element in array, make it a key and keep count of it.
function arrayConverter(array) {
  let countObj = {};
  for(let i=0; i<array.length; i++){
    let element = array[i];
    // console.log("element:", element);
    
    // if element exists in countObj
      //add 1 to it
    // if element doesn't exist 
      //then set as 1

    if(element in countObj){
      countObj[element] += 1;
    }
    else{
      countObj[element] = 1;
    }
  }
  return countObj;
}

// function arrayConverter(array) {
//   let obj = {};
//   for (let i = 0; i < array.length; i++) {
//     let key = array[i];
//     if (obj[key] === undefined) { //means that key and value DOESNT exists in object
//       obj[key] = 1
//     } else {
//       obj[key] += 1
//     }
//   }
//   return obj;
// }


console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
