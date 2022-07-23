// EAST 

// CONDITIONALS


// if (condition) {
//   /* code to run if condition is true */
// } else {
//   /* run some other code instead */
// }

// let instructor = 'crystalasdfjasdkf'

// if(instructor === 'james') {
//   console.log('you are talking to me')
// } else if (instructor === 'crystal'){
//   console.log('you are talking to crystal')
// } else {
//   console.log('you are talking to someone else ')
// }


// WHILE LOOPS
// let myName = 'james'
// let i = 0
// while (i < myName.length){
//   console.log(myName[i])
//   i++
// }



// FOR LOOPS
// let myName = 'james'
// for(let i = 0; i < myName.length; i++){
//   let char = myName[i]
//   console.log(char)
// }


// ARRAYS
  // INDEXING ARRAYS
//   let myArray = [1, 'string', false, [1,2,3]]

//   for(let i = 0; i < myArray.length; i++){
//     let ele = myArray[i]
//     console.log(ele)
//   }
// console.log(myArray.indexOf(true))
  // PROPERTIES / METHODS


  // ------- AAOPEN PROBLEMS -------------
// IS FIVE
function isFive(num) {
  if (num === 5) {
    return true;
  }
  // we don't have to wrap this in an `else` because if the above code did *not*
  // run then the number can't be 5 so we can just return false!
  return false
}

// console.log(isFive(5)); // => true
// console.log(isFive(13)); // => false

// IS ODD
function isOdd(number) {
  return (number % 2 !== 0);
}

function isOddConditional(number) {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true

//LOG BETWEEN 
function logBetween(lowNum, highNum) {
  for (let i = lowNum; i <= highNum; i += 1) {
    console.log(i);
  }
}

function logBetweenWhile(lowNum, highNum) {
  let i = lowNum;
  while (i <= highNum) {
    console.log(i);
    i++;
  }
}


// logBetween(-1, 2); // prints out:
// logBetween(14, 6); // => prints nothing
// logBetween(4, 6); // prints out

//SUM ARRAY 
// function sumArray(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     let num = array[i];
//     sum += num;
//   }

//   return sum;
// }

// function sumArrayWhile(array) {
//   let sum = 0;
//   let i = 0;

//   while (i < array.length) {
//     let num = array[i];
//     sum += num;
//     i += 1;
//   }

//   return sum;
// }

// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30

// ADD  ARRAYS 
// function combineArray(array1, array2) {
//   // your code here...
//   let newArr = array1.concat(array2)
//   return newArr
// }

// console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
// console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]


// DOUBLER

// function doubler(numbers) {
// 	let newArr = []
//     for(let i = 0; i < numbers.length; i++){
//     	let ele = numbers[i]
//         let doubled = ele * 2
//         newArr = newArr.concat(doubled)
//     }
//     return newArr
// }

// console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
// console.log(doubler([7, 1, 8])); // => [14, 2, 16]

//VOWEL COUNTER

/* 
store count var
store a variable of all of the vowels 
loop through the word
check if current element is a vowel
if it is increment the count
return the count
*/

// function countVowels(word) {
//   // your code here...
//   let count = 0
//   let vowels = 'aeiou' 


//   for(let i = 0; i < word.length; i++){
//   	if(vowels.includes(word[i])){
//     	count++ 
//     }
//   }
//   return count
// };

// console.log(countVowels("bootcamp")); // => 3
// console.log(countVowels("apple")); // => 2
// console.log(countVowels("pizza")); // => 2
// adding test comment for aa_update
