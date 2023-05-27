// // Plan
// // 1. Go through my str

// let countVowels = function (str) {
//   let VOWELS = "aeiou";
//   let vowelCounter = {};

//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i];

//     if (VOWELS.includes(letter)) {
//       if (vowelCounter[letter] === undefined) {
//         vowelCounter[letter] = 1
//       } else {
//         vowelCounter[letter]++;
//       };
//     };
//   };

//   return vowelCounter;
// };

// console.log(countVowels("hello world"));
// console.log(countVowels("apple"));
// console.log(countVowels("coding is as much an art as a science"));

let higherOrderFunction = function (callback) {
    console.log(callback)
    callback()
  };
  
  let intoAFunction = function () {
    console.log('I\'m being passed into a function');
  };
  
  let intoAFunctionPt2 = function () {
    console.log('I\'m ALSO being passed into a function');
  }
  
  higherOrderFunction(intoAFunction);
  higherOrderFunction(intoAFunctionPt2);