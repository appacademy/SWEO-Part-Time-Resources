// let removeEWords = function(str){
// 	let strArr = str.split(' ')
//     let resultArr = []
//     for(let i = 0; i < strArr.length; i++){
//     	let word = strArr[i]
//         let lower = word.toLowerCase()
//         if(lower.indexOf('e') === -1){
//         	resultArr.push(word)
//         }
//     }
//   return resultArr.join(' ')
// }

let hasE = function(word){
    if(!word.toLowerCase().includes('e')){
        return true
    }
    return false
}

let looper = function(arr){
        let resultArr = []
    for(let i = 0; i < arr.length; i++){
        let word = arr[i]
        if(hasE(word)){
            resultArr.push(word)
        }
    }
    return resultArr
}

let removeEWords = function(sentence){
 	let strArr = sentence.split(' ')

    let finalArr = looper(strArr)
   
    return finalArr.join(' ')
}



// console.log(removeEWords('Hello World')); // World
// console.log(removeEWords('We are here to learn how to code')); // to how to


let yell = function(word){
    return word.toUpperCase()
}

let whisper = function(word){
    return word.toLowerCase()
}

let echo = function(word){
    return yell(word) + ' ... ' + word + ' ... ' + whisper(word)
}

//Echo



// console.log(echo('Hello')); // 'HELLO ... Hello ... hello
// console.log(echo('PiNeAppLE')); // 'PINEAPPLE ... PiNeAppLE ... pineapple


// Two sum
// your code here
/* 
	write a function twoSum takes in an array and a target as params
    iterate over the array
    	grab element at index i 
    	nest another loop starting at the index after our outter loop
        grab element at index j
        check if our i element + our j element is our target
        	if it is return true
            
      otherwise return false 
    
*/

let twoSum = function(arr, target){
	for(let i = 0; i < arr.length; i++){
    	let num1 = arr[i]
        for(let j = i + 1; j < arr.length; j++){
        	let num2 = arr[j]
            if(num1 + num2 === target){
            	return true
            }
        }
    }
  	return false
}


// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8)); // true
// console.log(twoSum([4, 6, 2, 3], 11)); // false

// REVERSE SENTENCE

/* 
	write function reverseSentence takes in a sentence 
    split our sentence into a words array
	save new array variable
    loop over our words array
    	unshift our words into a new array 
    return our new array joined back into a sentence
*/

let reverseSentence = function(str){
	let words = str.split(' ')
    let  newArr = []
 	// for(let i = 0; i < words.length; i++){
 	// let ele = words[i]
 	// newArr.unshift(ele)
 	// }
    for(let i = words.length - 1; i >= 0; i--){
    	let ele = words[i]
       	newArr.push(ele)
    }
  return newArr.join(' ')
}

// console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
// console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

// INITIALS

/* 
write function initials takes in a name which is a string
save variable of splitting the sentence
create a neww array variable
loop over our split array
grab our first letter of each element and push into new array
return our new array joined to a string
*/

let initials = function(name){
	let array = name.split(' ')
    let resArr = []
    for(let i = 0; i < array.length; i++){
    	let ele = array[i]
        let firstLetter = ele[0]
        resArr.push(firstLetter)
    }
  return resArr.join('').toUpperCase()
}


// console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'
// console.log(initials('brian crawford scott')); // 'BCS'
// console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

// TWO D PRODUCT
/* 
write function twoDimensionalProduct takes in an array as parameter
create a product variable
loop over outter array
grab each sub array
loop over the sub array
multiply our product to our current element
return our product
*/

// let twoDimensionalProduct = function(arr){
//   let product = 1
//   let newArr = arr.flat()
//   console.log(newArr)
//   for(let i = 0; i < newArr.length; i++){
//   	let ele = newArr[i]
//     product *= ele
//   }
//   return product 
// }

let twoDimensionalProduct = function(arr){
    let product = 1
    for(let i = 0; i < arr.length; i++){
        let subArr = arr[i]
      for(let j = 0; j < subArr.length; j++){
          let num = subArr[j]
          product *= num
      }
    }
    return product 
  }

//   let arr1 = [
//       [6, 4],
//       [5],
//       [3, 1]
//   ];
//   console.log(twoDimensionalProduct(arr1)); // 360
  
//   let arr2 = [
//       [11, 4],
//       [2]
//   ];
//   console.log(twoDimensionalProduct(arr2)); // 88

//POPPER

// your code here
/* 
write function popper that takes in an array and a num
save new array variable 
loop up to the number passed in
	pop off the last element
    push that element onto a new array
    
  return our new array 
*/

// let popper = function(arr, num){
// 	let arrLength = arr.length
//     let arrDif = arrLength - num
//     return arr.splice(arrDif, arrLength).reverse()
// }

let popper = function(arr, num){
	let newArr = []
    for(let i = 0; i < num; i++){
    	let last = arr.pop()
        newArr.push(last)
    }
  return newArr
}

// let arr1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(popper(arr1, 2)); // [ 'e', 'd' ]
// console.log(arr1); // [ 'a', 'b', 'c' ]

// let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
// console.log(popper(arr2, 1)); // [ 'cabbage' ]
// console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

//CHOOSE PRIMES
let isPrime = function(num){
	for(let i = 2; i < num; i++){
    	if(num % i === 0){
        	return false
        }
    }
  return true
}

let choosePrimes = function(arr){
	let resArr = []
    for(let i = 0; i < arr.length; i++){
    	let ele = arr[i]
        if(isPrime(ele)){
        	resArr.push(ele)
        }
    }
  return resArr
}




// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

// LONGEST WORD
/* 
	write longestWord function takes in sentence as param
    split that sentence into an array and save it
    create a longest variable set to empty string
    loop over our split array
    if our current word is longer than our longest 
    	reassign longest to our current word
        
    return our longest word
*/
let longestWord = function(str){
	let arr = str.split(' ')
    let longest = ''
    for(let i = 0; i < arr.length; i++){
    	let currWord = arr[i]
        if(currWord.length > longest.length){
        	longest = currWord
        }
    }
  return longest
}


// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''

// ABBREVIATE
/* 
write abbreviate that takes in a word
save a vowels variable
save a new string variable as an empty string
loop over our word
check if current letter is not a vowel
add current letter to our new string
return our new string
*/

let abbreviate = function(word){
	let vowels = 'aeiou'
    let res = ''
    for(let i = 0; i < word.length; i++){
    	let letter = word[i]
        if(!vowels.includes(letter.toLowerCase())){
        	res += letter
        }
    }
    return res
}


// console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'

// PRODUCT ARRAY

let productWithReduce = function(arr){
	let product = 1
    for(let i = 0; i< arr.length; i++){
    	let num = arr[i]
        product *= num
    }
  return product
}



// console.log(productWithReduce([10, 3, 5, 2])); // 300
// console.log(productWithReduce([4, 3])); // 12