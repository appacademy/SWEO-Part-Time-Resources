// 			two sum recall
// your code here
let twoSum = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];

            if (isEqualTooTarget(num1, num2, target)) {
                return true;
            }
        }
    }

    return false;
};

let isEqualTooTarget = function(num1, num2, target){
	return num1 + num2 === target // boolean either true or false
}

let fourNumbersEqual = function(num1, num2, num3, num4){
	let target = num3 + num4
  	return num1 + num2 === num3 + num4
}

console.log(fourNumbersEqual(1,1,1,1)) // true
console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false


// 			reverseSentence

// your code here
// let reverseSentence = function(sentence) {
//     let words = sentence.split(' ');
//     let newWords = [];

//     for (let i = words.length - 1; i >= 0; i--) {
//         newWords.push(words[i]);
//     }

//     let newSentence = newWords.join(' ');
//     return newSentence;
// };

function reverseSentence(sentence) {
	let reversed = [];

	helper(sentence, reversed)
	return reversed.join(' ');;
}

function helper(helperInput, array) {
	let words = helperInput.split(' ');
	for (let i = words.length - 1; i >= 0; i--) {
		array.push(words[i]);
    }
}



// function reverseSentence(sentence){
// 	return sentence.split(' ').reverse().join(" ");
// }//




console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'


// choose primes

// your code here
let choosePrimes = function(nums){
	let primes = []
    // let isPrime = true

    for(let i = 0; i < nums.length; i++){
    	let num = nums[i] // saving our current number
        			  // 2 < 36
        // isPrime = true
        // for(let j = 2; j < num; j++){ // we're going through the number
        // 	if (num % j === 0){	 // check if that number is a prime
        //     	isPrime = false // sets that current num is not a prime number
        //     }
        // }

      	if(isPrime(num)){ // if its a prime
        	primes.push(num) // add it to our array
        }
    }
  	return primes
}

let isPrime = function(num){
  	if (num < 2){
    	return false
    }

	for(let j = 2; j < num; j++){ // we're going through the number
        if (num % j === 0){	 // check if that number is a prime
        	return false// sets that current num is not a prime number
      }
    }
	return true
}


console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
