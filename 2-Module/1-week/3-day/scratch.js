//* DRY - Dont Repeat Yourself
  // WET - Write Everything Twice or We Enjoy Typing
// const threeIncreasing = function(nums) {
//   for ( let i = 0; i < nums.length - 2; i++ ) {
//     if ( nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2] ) {
//       return true;
//     }
//   }
//   return false;
// }

const isConsecutive = function(nums) {
  const separatedBy = 1;

  for (let i = 0; i < nums.length - 1; i++ ) {
    const num1 = nums[i];
    const num2 = nums[i + 1];

    if ( num1 + separatedBy !== num2 ) {
      return false;
    }
  }
  return true;
}
const threeIncreasing = function(nums) {
  for ( let i = 0; i < nums.length - 2; i++ ) {
    const consecutiveNums = [];
    for ( let j = i; j < i + 3; j++ ) {
      consecutiveNums.push(nums[j]);
    }

    if ( isConsecutive( consecutiveNums ) ) {
      return true;
    }
  }
  return false
}

console.log(threeIncreasing([5, 1, 2, 3, 6])); // true
console.log(threeIncreasing([5, 1, 2, 4, 6])); // false
//* SRP - Single Responsibility Principle
  // Every module, class or function should have one job and do it well
  const VOWELS = 'aeiou';

  // const abbreviateWords = function(sentence) {
  //   const words = sentence.split(' ');
  
  //   for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
  //     const word = words[wordIdx];
  //     if (word.length > 3) {
  //       let newWord = "";
  //       let charIdx = 0;
  
  //       while (charIdx < word.length && newWord.length < 3) {
  //         let char = word[charIdx];
  //         if (!VOWELS.includes(char)) {
  //           newWord += char;
  //         }
  //         charIdx++;
  //       }
  
  //       words[wordIdx] = newWord;
  //     }
  //   }
  
  //   return words.join(' ');
  // };
  const changeWord = word => {
    let newWord = '';
    let charIdx = 0;

    while ( charIdx < word.length && newWord.length < 3 ) {
      let char = word[charIdx];

      if (!VOWELS.includes(char)) {
        newWord += char;
      }
      charIdx++;
    }
    return newWord;
  }
  const abbreviateWord = word => {
    if ( word.length > 3 ) {
      return changeWord( word );
    }
  }
  const abbreviateWords = sentence => {
    const words = sentence.split(' ');

    for ( let wordIdx = 0; wordIdx < words.length; wordIdx++) {
      const word = words[wordIdx];
      words.splice(wordIdx, 1, abbreviateWord(word));
    }

    return words.join(' ');
  }
  
  console.log(abbreviateWords("Hello World!")); // Hll Wrl
  console.log(abbreviateWords('This is a longer sentence'));
//* Modules
  // Every JavaScript file is a module
  // Local Modules are modules within your Project
  // To make functions and variables available in other modules, you need to export them

  // Export Multiple Things
  // calculator.js
  const operations = ['+','-','*'];

  function add( num1, num2 ) {
    //---
  };
  function subtract( num1, num2 ) {
    //---
  }
  function multiply( num1, num2 ) {
    //---
  }

  module.exports = {
    add,
    subtract,
    operations
  }
  // module.exports.add = add;
  // module.exports[subtract] = subtract;
  // exports.add = add;

  //Single Export
  module.exports = operations;
  // IMPORTING
// ./school
// ├── courses
// |   ├── physics.js
// |   └── music.js
// └── people
//     ├── index.js
//     ├── students.js
//     └── teachers.js
  // const students = require('../people/students');
  const people = require('../people');

  const calculator = require('./calculator');
  const add = calculator.add;
  const { add, subtract, operations } = require('./calculator');