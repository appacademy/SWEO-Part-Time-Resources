/*

Input: String, 'char''Num''char''Num';
Output: Uncompressed Str

--Plan
1. var for output string
2. loop through the input string.
  a) Access the char using i;    x
  b) Access the repetition i + 1;  3

*/


// let uncompress = function(str){
//   let res = '';

//   for(let index = 0; index < str.length; index = index + 2){
//     let char = str[index];
//     let times = Number(str[index + 1]);

//     for(let repetitions = 0; repetitions < times; repetitions++){
//       res = res + char;
//     };
//   };
//   return res;
// };

//                       //0  2  4
// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'

/*
Input: Array, Number
Output: A mutated array based on the number given

arr= [1,2,3,4] func(arr, -1) [2,3,4,1] <-
arr= [1,2,3,4] func(arr, 1) [4,1,2,3] ->

--Plan
1. Rotate right section
  a) if statement -- the number is positive : rotate right
    1. pop
    2. unshift
  b) else -- is negative : rotate left
    1. shift
    2. push
*/



// let rotate = function(arr, num){
//   if(num > 0){
//     for(let i = 0; i < num; i++){
//       let popped = arr.pop()
//       arr.unshift(popped)
//     }
//   } else {
//     for(let j = num; j < 0; j++){
//       let shifted = arr.shift();
//       arr.push(shifted);
//     }
//   }
//   return arr;
// }



// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 16);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]




// function maxInMatrix(matrix){
//   let max = -Infinity;

//   for(let i = 0; i < matrix.length; i++){
//     let subArr = matrix[i];

//     for(let j = 0; j < subArr.length; j++){
//       let ele = subArr[j];

//       if(ele > max){
//         max = ele;
//       }
//     }
//   }
//   return max;
// }

// matrix = [
//   [11, 2, -99],
//   [20, 19, 10],
//   [47, 72, 56]
// ]

// console.log(maxInMatrix(matrix)); // 72


function maxColumn(matrix){
  let height = matrix.length;
  let width = matrix[0].length;
  let res = [];

  for(let col = 0; col < width; col++){
    let max = matrix[0][col];

    for(let row = 1; row < height; row++){
      let ele = matrix[row][col]
      if( ele > max){
        max = ele;
      }
    }

    res.push(max);
  }
  return res;
}


matrix = [
  [ 5,  9, 21],
  [ 9, 19,  6],
  [12, 14, 15]
]

console.log(maxColumn(matrix)); // [12, 19, 21]
