/*
Input: string, has a pattern of 'charNum'
Output: string, expanded based on the pattern

a2b1 -> aab
z1h3 -> zhhh


--Plan
1. loop, iterate by 2 i = i + 2
  a) char = str[i]
  b) num = str[i + 1]
*/

// function uncompress(str){
//   let res = '';

//   for(let i = 0; i < str.length; i = i + 2){
//     let char = str[i];
//     let num = Number(str[i + 1]);

//     for(let j = 0; j < num; j++){
//       res = res + char;
//     }
//   }
//   return res;
// }


// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'

/*
f([1,2,3], 1) -> [3,1,2]; rotate right
f([1,2,3], -1) <- [2,3,1]; rotate left
*/

// let rotate = function(arr, num){
//   if(num > 0){
//     //rotate right
//     for(let i = 0; i < num; i++){ //num amount of iterations
//       let popped = arr.pop()
//       arr.unshift(popped);
//     }
//   } else {
//     for(let j = num; j < 0; j++){
//       let shifted = arr.shift();
//       arr.push(shifted);
//     }
//   }
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ];

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ];



// function maxInMatrix(matrix){
//   let max;

//   for(let i = 0; i < matrix.length; i++){
//     let subArr = matrix[i];

//     for(let j = 0; j < subArr.length; j++){
//       let ele = subArr[j];
//       if(max === undefined || max < ele){
//         max = ele;
//       };
//     };
//   };
//   return max;
// };

// let matrix = [
//   [11,  2,-99],
//   [20, 19, 10],
//   [47, 72, 56]
// ]

// console.log(maxInMatrix(matrix)); // 72



// function maxColumn(matrix){
//   let height = matrix.length;
//   let width = matrix[0].length;
//   let res = [];

//   for(let col = 0; col < width; col++){
//     let max = matrix[0][col];

//     for(let row = 1; row < height; row++){
//       let ele = matrix[row][col]
//       if( ele > max){
//         max = ele;
//       }
//     }
//     res.push(max);
//   }
//   return res;
// }

// let matrix = [
//   [ 5,  9, 21],
//   [ 9, 19,  6],
//   [12, 14, 15]
// ]

// console.log(maxColumn(matrix)); // [12, 19, 21]


/*
- If < 3 return the same -> go -> go
- if ends with vowel return word doubled -> hello -> hellohello
- else return word + the substring from the final vowel -> fast -> fastast
*/


let sameWord = function(word){
  return word;
}

let doubleWord = function(word){
  return word + word;
}

let repeatEnd = function(word, vowels){
  let i = word.length - 1;

  while(i >= 0){
    let letter = word[i];
    if(vowels.includes(letter)){
      return word + word.slice(i);
    }
    i--;
  }
}

let translateWord = function(word){
  let vowels = 'aeiouAEIOU';
  let lastChar = word[word.length - 1];

  if(word.length < 3){
    return sameWord(word);
  } else if(vowels.includes(lastChar)){
    return doubleWord(word);
  } else {
    return repeatEnd(word, vowels);
  }

}

function repeatingTranslate(sentence){
  let wordsArr = sentence.split(' ');
  let res = [];

  for(let i = 0; i < wordsArr.length; i++){
    let word = wordsArr[i];
    let translated = translateWord(word);
    res.push(translated);
  }

  return res.join(' ');
}

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
