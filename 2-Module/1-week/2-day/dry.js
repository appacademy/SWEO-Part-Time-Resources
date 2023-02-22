// // Normal
// const threeIncreasing = function (nums) {
//     for (let i = 0; i < nums.length - 2; i++) {
//         if (nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2]) {
//             return true;
//         }
//     }
//     return false
// };

// console.log(threeIncreasing([5, 1, 2, 3, 6])); // true
// console.log(threeIncreasing([5, 1, 2, 4, 6])); // false

// Refactor

// SRP -- Break problem into multiple jobs (helper functions)
// // This function determines whether or not the numbers in an array are concsecutive
// const isConsecutive = function (nums) {
//     const separatedBy = 1;

//     for (let i = 0; i < nums.length - 1; i++) {
//         const num1 = nums[i];
//         const num2 = nums[i + 1];

//         if (num1 + separatedBy !== num2) {
//             return false;
//         }
//     }
//     return true;
// };

// // This function builds input to be tested by our helper function, and based on
// // that result reports wether or not we've satisfied our prompt
// const threeIncreasing = function (nums) {
//     for (let i = 0; i < nums.length - 2; i++) {
//         const consecutiveNums = [];
//         for (let j = i; j < i + 3; j++) {
//             consecutiveNums.push(nums[j]);
//         }

//         if (isConsecutive(consecutiveNums)) {
//             return true;
//         }
//     }
//     return false;
// };


// console.log(threeIncreasing([5, 1, 2, 3, 6])); // true
// console.log(threeIncreasing([5, 1, 2, 4, 6])); // false

// What about if we want to see if there's a pattern of three numbers separated
// by 2? If we use the old version, we have to change more code:

// // Original
// const threeIncreasing = function(nums) {
//     for (let i = 0; i < nums.length - 2; i++) {
//       // Look at all those +2 in there  
//       if (nums[i] + 2 === nums[i + 1] && nums[i + 1] + 2 === nums[i + 2]) {
//         return true;
//       }
//     }
//     return false
//   };

//   console.log(threeIncreasing([5, 1, 2, 3, 6])); // false
//   console.log(threeIncreasing([5, 1, 2, 4, 6])); // true


// refactored
// All we need to do is update our helper function, altering separatedBy to
// satisfy the changes in our prompt:
// const isConsecutive = function (nums) {
//     // single edit
//     const separatedBy = 2;

//     for (let i = 0; i < nums.length - 1; i++) {
//         const num1 = nums[i];
//         const num2 = nums[i + 1];

//         if (num1 + separatedBy !== num2) {
//             return false;
//         }
//     }
//     return true;
// };
// // no changes
// const threeIncreasing = function (nums) {
//     for (let i = 0; i < nums.length - 2; i++) {
//         const consecutiveNums = [];
//         for (let j = i; j < i + 3; j++) {
//             consecutiveNums.push(nums[j]);
//         }

//         if (isConsecutive(consecutiveNums)) {
//             return true;
//         }
//     }
//     return false;
// };

// console.log(threeIncreasing([5, 1, 2, 3, 6])); // false
// console.log(threeIncreasing([5, 1, 2, 4, 6])); // true

// // WHAT IF WE WANT TO CHECK FOR FOUR CONSECUTIVE NUMBERS?
// Our original solve gets tougher to work with and is more prone to bugs.
// Please help debug this code.  It's broken!
// const fourIncreasing = function (nums) {
//     for (let i = 0; i < nums.length - 2; i++) {
//         // those +2s should be +1s!
//         if (nums[i] + 2 === nums[i + 1] && nums[i + 1] + 2 === nums[i + 2] && nums[i + 2] + 1 === nums[i + 3]) {
//             return true;
//         }
//     }
//     return false
// };

// console.log(fourIncreasing([5, 1, 2, 3, 4, 6])); // true
// console.log(fourIncreasing([5, 1, 2, 4, 3, 6])); // false

// using the refactored version, things are much easier to work with.
// Helper can go back to separatedBy = 1
const isConsecutive = function (nums) {
    const separatedBy = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        const num1 = nums[i];
        const num2 = nums[i + 1];
        if (num1 + separatedBy !== num2) {
            return false;
        }
    }
    return true;
};

const fourIncreasing = function (nums) {
    for (let i = 0; i < nums.length - 2; i++) {
        const consecutiveNums = [];
        // now we build an array that contains one extra number
        for (let j = 0; j < 4; j++) {
            consecutiveNums.push(nums[i + j]);
        }

        if (isConsecutive(consecutiveNums)) {
            return true;
        }
    }
    return false
};

console.log(fourIncreasing([5, 1, 2, 3, 4, 6])); // true
console.log(fourIncreasing([5, 1, 2, 4, 3, 6])); // false