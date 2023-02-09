/* EAST */

/* 
 5 => true
 anything else => false
 
 Plan 
 
 Write a conditional to check if the number is five
 	if it is 5 then I will return true
    else I'll return false
*/
function isFive(num) {
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}

console.log(isFive(5)); // => true
console.log(isFive(13)); // => false

// let num = 5;

// if (num === 4) {
//    console.log('this is four');
// } else if (num < 5) {
//    console.log('num is less than 5');
// } else if (num > 6) {
//    console.log('num is greater than 6');
// } else {
//    console.log('nothing above is true');
// }

/* 
5 => true
2 => false

Plan
  I need to make a conditional to check if a number is odd....
    if num % 2 === 1 then return true
    otherwise return false
*/
function isOdd(num) {
  // Math.abs()
  if (num % 2 === 1 || num % 2 === -1) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-16))


console.log(5 % 2)
console.log(2 % 2)
console.log(10% 2)
console.log(-16%2)

// Examples:
// while loops
// init expressions
// while key word with a condtion to check
// step toward the condition being fasly

// let i = 0;

// while (i < 5) {
//   console.log('hey');
//   console.log('horse');
//   console.log(i);
//   i += 1
// }

// for loop
// for key word and () {}
// inside of the () 
   // inital expression
   // condition
   // step toward the condition being falsy

function logBetween (lowNum, highNum) {
  // let i = lowNum
  // while (i <= highNum) {
  //   console.log(i)
  //   i++
  // }
  for (let i = lowNum; i <= highNum; i = i + 1) {
    console.log(i);
  }
}


logBetween(-1, 2); // prints out:
-1
0
1
2

logBetween(14, 6); // => prints nothing

logBetween(4, 6); // prints out:
4
5
6


for (let i = 4; i < 5; i += 1) {
  console.log('hey');
  console.log('horse');
  console.log(i);
}

/* 
Plan
define a sum variable and set to zero = 0
I'll get each number from the array - Iteration

I need to iterate over the array
  add each number to a sum variable

return the sum
*/
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
      let num = array[i]
      sum += num;
  }
  return sum
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

let arr = [5, 6, 4];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
// what is this array's length ?? === 3


// let arr = [2, 5, 7, "hello", false, NaN, [1, 2, 3]];

// let str = "hello";
// console.log(str[1]);

// let arr = [4, 5, 6];
// console.log(arr[1])
// console.log([4, 5, 6][1]) /// left is an array , right is an index


// // String.indexOf()
// // Array.indexOf() // we'll have different methods for different datatypes

// let target;

// let arr2 = [1, 2, 3];

// console.log(arr2.indexOf(target));
// console.log(arr2.indexOf(7));

// Length property
// let arr3 = [5, 8, 12, 5];

// console.log(arr3.length);

// // Concat - join
// let str1 = "hello"
// let str2 = " world"
// let str3 = str1 + str2

// console.log(str3)

// let arr4 = [1, 2, 3];
// let arr5 = [4, 5];
// let arr6 = [6]
// // let arr6 = arr4 + arr5 :(
// let arr7 = arr4.concat(arr5, arr6)
// // console.log(arr7, arr4, arr5, arr6)



