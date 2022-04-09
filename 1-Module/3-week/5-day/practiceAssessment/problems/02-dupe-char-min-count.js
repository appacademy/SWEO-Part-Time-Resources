/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
  let count = {};

  // use a loop to iterate over the string
  for (let i = 0; i < string.length; i++) {
    // create a variable to look at each individual character
    let currentChar = string[i];

    // if our current character exists as a key inside of our count object
    // if we've see that letter before,
    if (currentChar in count) {
      // increase the value by 1
      count[currentChar]++;
    } else {
      // otherwise, we haven't seen this letter before,
      // so, start counting it
      // add it to the object, count["a"] = 1
      count[currentChar] = 1;
    }
  }

  // return our object
  return count;
}




function duplicateCharMinCount(string, minCount) {
  // get our object that has key value pairs  // [0: "a", 1: "p", 2: "l", 3: "e"]
  let countedChars = countCharacters(string); // {"a": 1, "p": 2, "l": 1, "e": 1}
  // inside this object, any VALUE >= minCount will be saved in finalArr
  let finalArr = [];

  // loop over every key in our object
  for (let key in countedChars) {
    // REMINDER: key is just like i => object[key] is like array[i]

    // if the value at our current key is >= minCount
    // LOOP 1: countedChars[key] =>  countedChars["a"] => 1
    // LOOP 2: countedChars[key] =>  countedChars["p"] => 2
    if (countedChars[key] >= minCount) {
      // push into finalArr
      finalArr.push(key); // we push "p" into our final array
    }
  }

	// return ["p"]
  return finalArr;
}

// duplicateCharMinCount("apple", 2) // ["p"]
// duplicateCharMinCount("banana", 2) // ["a", "n"]
// duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]

// let arr = ["blue", 5, true]

// console.log(arr[0])

//!------------ FILTER VERSION -----------------

// function duplicateCharMinCount(string, minCount) {
//   let myObj = countCharacters(string);

//   let keysArray = Object.keys(myObj);

//   let finalArr = keysArray.filter(function (key) {
//     if (myObj[key] >= minCount) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   return finalArr;
// }

//! ------------ Cool one-ish-line -------------
// function duplicateCharMinCount(string, minCount) {
//   let myObj = countCharacters(string);

// 	return Object.keys(myObj).filter(function (key) {
// 		return myObj[key] >= minCount
//   });

// }

// duplicateCharMinCount('What about a longer string?', 3); // ["a", "t", " "]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
