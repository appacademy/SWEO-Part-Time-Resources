// // // Plan
// // - func declaration (params = str)
// // - create vowels variable = "aeiouAEIOU"
// // - create vowelCounter variable = {}
// // - for loop
// //   - start: i = 0
// //   - end: str.length
// //   - step: + 1
// // - grab char (str[i])
// // - conditional (is char a vowel (.includes))
// //   - if true,
// //   - conditional (does this vowel exist in my vowelCounter)
// //     - if true, update value at obj[char]
// //     - if false, create key: value pair (obj[char] = 1)
// // - return vowelCounter

// function countVowels(str) {
//     let vowels = "aeiouAEIOU";
//     let vowelCounter = {};

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if (vowels.includes(char)) {
//             if (vowelCounter[char] === undefined) {
//                 vowelCounter[char] = 1;
//                 // console.log(char, vowelCounter)
//             } else {
//                 vowelCounter[char]++
//                 // console.log(char, vowelCounter)
//             };
//         };
//     };

//     return vowelCounter;
// };

// console.log(countVowels("coding is as much an art as a science"))
