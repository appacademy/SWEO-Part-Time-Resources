/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a 
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word 
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
***********************************************************************/

function appleCounter(appleObj) {
  // your code here
  let count = 0
  let keys = Object.keys(appleObj)
  for(let i = 0; i < keys.length; i++){
    let word = keys[i]
    let lower = word.toLowerCase()
    if(lower.includes('apple')){
      count ++ 
    }
  }
  return count
}

// let obj = { banana: "yay!" };
// appleCounter(obj); // => 0

// let obj1 = { crabapple: "yum!" };
// appleCounter(obj1); // => 1

// let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
// appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
console.log(appleCounter(obj3)); // => 3
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
