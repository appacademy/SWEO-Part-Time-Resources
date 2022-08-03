<<<<<<< HEAD
// UNCOMPRESS

/* 
	write aa function uncompress takes in a string
    save a new string variable
    loop over our string incrementing by 2 so we grab our letter
    save our letter variable 
    grab each number 
    loop up to that number adding our letter to our new string
     
    
	return new string
*/

let uncompress = function(str){
	let newStr = ''
    // for(let i = 1; i < str.length; i +=2){
    // 	let ele = str[i]
    //     let repeatTimes = Number(ele)
    //     let repeatLetter = str[i - 1].repeat(repeatTimes)
    //     newStr += repeatLetter
    // }

    
    for(let i = 0; i< str.length; i++){
    	let letter = str[i]
        let number = Number(str[i + 1])
        for(let j = 0 ; j<number; j++){
        	newStr += letter
        }
    }
  return newStr
}


// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'


// HIPSTERFY
/* 
write a helper function that removes lastVowel that takes in a word
	save a vowels variable
    loop backwards over the word
    check if our current character is a vowel
    	return in our if the word with that letter sliced out of it
    
    
    return word 
    
  write hipsterfy funciton that takes in a sentence
  split sentence into an array
  create a new array variable
  loop over the array 
  push in ouir new word thats passed through helper
  
  return our new array joined
*/

let helper = function(word){
	let vowels = 'aeiou'
    for(let i = word.length - 1; i >= 0; i--){
    	let letter = word[i]
        if(vowels.includes(letter.toLowerCase())){
        	return word.slice(0, i) + word.slice(i + 1)
        }
    }
  return word
}

let hipsterfy = function(str){
	let arr = str.split(' ')
    let newArr = []
    for(let i = 0; i < arr.length; i++){
    	let ele = arr[i]
        let removed = helper(ele)
        newArr.push(removed)
    }
    return newArr.join(' ')
}


=======
let hipsterfy = function(str){
	let arr = str.split(' ')
    let res = []
    for(let i = 0; i < arr.length; i++){
    	let word = arr[i]
        let removed = lastVowel(word)
        res.push(removed)
    }
    
    return res.join(' ')
}

const lastVowel = (word) => {
	let vowels = 'aeiou'
    for(let i = word.length - 1; i >= 0; i--){
    	let letter = word[i]
        if(vowels.includes(letter)){
        	return word.slice(0, i) + word.slice(i + 1)
        }
    }
}

>>>>>>> 2022-Jul-W
// console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

<<<<<<< HEAD
// ROTATE
/* 
	write a function rotate takes in an array and a number
    check if the num is positive 
    	loop up to the number
        pop off the element 
        unshift
    else
    	loop up to the negative number
        shift off the first element
        push the element to the end
*/
let rotate = function(arr, num){
    if(num > 0){
        for(let i = 0; i < num; i++){
        let last = arr.pop()
          arr.unshift(last)
      }
    } else {
        for(let i = 0; i < -num; i++){
          let first = arr.shift()
          arr.push(first)
      }
    }
      return arr
  }
  
  
  
  
  let arr = ['a', 'b', 'c', 'd', 'e'];
  rotate(arr, 2);
  console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]
  
  let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
  rotate(animals, -1);
  console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

// ADDITION MUTATOR
/* 
write function additionMutator accepts an arr and num
loop over our array
add our number to our current element
*/

let additionMutator = function(arr, num){
	for(let i = 0; i < arr.length; i++){
	arr[i] += num
	}

  return arr
}


// let nums1 = [3, 7, 1, 2];
// additionMutator(nums1, 4);
// console.log(nums1);     // [ 7, 11, 5, 6 ]

// let nums2 = [11, 9, 4];
// additionMutator(nums2, -1);
// console.log(nums2);     // [ 10, 8, 3 ]

// ALTERNATING WORDS
/* 
write a function alternatingWords takes in an array
loop over our array
	check if we are on even or odd index
    if even
    	uppercase that word
    if odd
    	lowercase that word
*/
let alternatingWords = function(words){
	for(let i = 0; i < words.length; i++){
	if(i % 2 === 0){
	words[i] = words[i].toUpperCase()
	} else {
	words[i] = words[i].toLowerCase()
	}
	}
//   	for(let i = 0; i < words.length; i++){
//     	words[i] = words[i].toUpperCase()
//     }
  
//   	for(let i = 1; i < words.length; i+=2){
//     	words[i] = words[i].toLowerCase()
//     }
}


// let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
// alternatingWords(words1);
// console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

// let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]

function maxColumn(matrix) {
    let width = matrix[1].length
   let height = matrix.length
   let newArr = []
   
   for(let i = 0; i < width; i++){
     let currMax = matrix[0][0]
       for(let j = 0; j < height; j++){
         let ele = matrix[j][i]
           if(ele > currMax){
               currMax = ele
           }

       }
         newArr.push(currMax)
   }
 return newArr
}


// matrix = [[ 5,  9, 21],
//          [ 9, 19,  6, 55],
//          [12, 15]]

// console.log(maxColumn(matrix)); // [12, 19, 21]
=======

//max in matrix 
/* 
create a max variable set to our first element
loop over our matrix
	grab each sub arr
    loop over our sub array
    	check current element greater our max
        	reassign max
            
      return max
*/

function maxInMatrix(matrix) {
    // your code here...
    let max = -Infinity
    for(let i = 0; i < matrix.length; i++){
        let subArr = matrix[i]
      for(let j = 0; j < subArr.length; j++){
          let ele = subArr[j]
          console.log(ele)
          if(ele > max){
              max = ele
          }
      }
    }
    return max
  }
  
  
//   matrix = [[11,  2,-99],
//             [20, 19, 10],
//             [47, 72, 56]]
  
//   console.log(maxInMatrix(matrix)); // 72







/* 
create a width variable that is equal to our subarr length
create a height variable equal to our overall length
create a newArr 
loop up to our width
	save a variable that is our current max
	loop oup to our height
    if our current max is less than our current element
    	reassign our mmax to our curreent element
        
    push our current max into our result arr

return newArr
*/


function maxColumn(matrix) {
    let width = matrix[0].length
    let height = matrix.length
    let res = []
    for(let col = 0; col < width; col++){
        let currMax = matrix[0][col]
       for(let row = 0; row < height; row++){
           let currentEle = matrix[row][col]
           if(currMax < currentEle){
               currMax = currentEle
           }
       }
      res.push(currMax)
    }
     return res
   }
   
   
//    matrix = [[ 5,  9, 21],
//              [ 9, 19,  6],
//              [12, 14, 15]]
   
//    console.log(maxColumn(matrix)); // [12, 19, 21]
>>>>>>> 2022-Jul-W

// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here
<<<<<<< HEAD

let wordInVowel = function(word){
=======
let endInVowel = function(word){
>>>>>>> 2022-Jul-W
	return word + word
}

let notEndInVowel = function(word){
	let vowels = 'aeiou'
    for(let i = word.length - 1; i >= 0; i--){
    	let letter = word[i]
        if(vowels.includes(letter)){
        	return word + word.slice(i)
        }
    }
}

let repeatingTranslate = function(str){
	let arr = str.split(' ')
    let vowels = 'aeiou'
    let newArr = []
<<<<<<< HEAD
    for(let i = 0; i < arr.length; i++){
      let word = arr[i]
    	
    	if(word.length < 3){
        	newArr.push(word)
        } else {
        	let ending = word[word.length - 1]
            if(vowels.includes(ending)){
              let vowelWord = wordInVowel(word)
            	newArr.push(vowelWord)
            } else {
              let nonVowel = notEndInVowel(word)
            	newArr.push(nonVowel)
            }
        }
    }
  
  return newArr.join(' ')
}

=======
    for(let i = 0; i< arr.length; i++){
    	let word = arr[i]
        let last = word[word.length - 1]
        if(word.length < 3){
        	newArr.push(word)
        } else {
            if(vowels.includes(last)){
      		let vowelWord = endInVowel(word)
        	newArr.push(vowelWord)
      	} else {
      		let nonVowelWord = notEndInVowel(word)
        	newArr.push(nonVowelWord)
     	 }
      }

    }
    return newArr.join(' ')
}

// console.log(notEndInVowel('running'))
>>>>>>> 2022-Jul-W

// console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

<<<<<<< HEAD

// function maxInMatrix(matrix) {
//     let currentMax = -Infinity;
//     for (let row = 0 ; row < matrix.length ; row++) {
//       for (let col = 0 ; col < matrix[0].length ; col++) {
//         if (matrix[row][col] > currentMax) {
//           currentMax = matrix[row][col];
//         }
//       }
//     }
//     return currentMax;
//   }
  
//   matrix = [[11,  2,-99],
//             [20, 19, 10],
//             [47, 72, 56]]
  
//   console.log(maxInMatrix(matrix)); // 72
  

=======
// alternating words
/* 
write a function alternatingWords takes in an array
loop over our array
	check if we are on even or odd index
    if even
    	uppercase that word
    if odd
    	lowercase that word
*/

let alternatingWords = function(arr){
	for(let i = 0; i < arr.length; i += 2){
	arr[i] = arr[i].toUpperCase()
	}
	for(let i = 1; i < arr.length; i += 2){
	arr[i] = arr[i].toLowerCase()
	}
  // for(let i = 0; i < arr.length; i++){
  // 	if(i % 2 === 0){
  //   	arr[i] = arr[i].toUpperCase()
  //   } else {
  //   	arr[i] = arr[i].toLowerCase()
  //   }
  // }
}



// let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
// alternatingWords(words1);
// console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

// let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]

// Your code here
/* 
write function additionMutator accepts an arr and num
loop over our array
add our number to our current element
*/

// addition mutator

let additionMutator = function(arr, num){
	for(let i = 0; i < arr.length; i++){
        arr[i] += num
    }
  // return arr
}



// let nums1 = [3, 7, 1, 2];
// additionMutator(nums1, 4);
// console.log(nums1);     // [ 7, 11, 5, 6 ]

// let nums2 = [11, 9, 4];
// additionMutator(nums2, -1);
// console.log(nums2);     // [ 10, 8, 3 ]

// rotate
/* 
	write a function rotate takes in an array and a number
    check if the num is positive 
    	loop up to the number
        pop off the element 
        unshift that element on the array thats passed in 
    else
    	loop up to the negative number
        shift off the first element
        push the element to the end
*/
let rotateRight = function(arr1, num1){
	for(let i = 0; i < num1; i++){
    	let char = arr1.pop()
    	arr1.unshift(char)
    }
  return arr1
}

let rotateLeft = function(arr2, num2){
	for(let i = 0; i < -num2; i++){
    	let char1 = arr2.shift()
        arr2.push(char1)
    }
  return arr2
}

function rotate(arr, num){
	if(num > 0){
    	return rotateRight(arr, num)
    } 
  return rotateLeft(arr, num)
}


// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
>>>>>>> 2022-Jul-W
