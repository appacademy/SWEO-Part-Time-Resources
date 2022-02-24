
// twoSum -------------------------------------------
// your code here

// function would have 2 parameters
// array and a number as args
// return boolean
// check if two numbers add up to the target
// 2 numbers are distinct
// array is unique

let twoSum = function(arr, target){
	for(let i = 0; i < arr.length; i++){
    	let number1 = arr[i]
        for(let j = i + 1; j < arr.length; j++){
        	let number2 = arr[j]
            // let sum = number1 + number2
            // if(sum === target){
            // 	return true
            // }
            if (sumEqualTarget(number1, number2, target)){
            	return true
            }
        }
    }
  	return false
}

let sumEqualTarget = function(num1, num2, target){
	return num1 + num2 === target
}



console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false



// initials -------------------------------------------
// your code here

// full name = string
// 1 paramater
// 1 argument
// return initials = string
// first letters of the word

let initials = function(name){
	let names = name.split(' ') // ['anna', 'paschall']
    let initials = '';

  	for(let i = 0; i < names.length; i++){
      	initials = capatalizeFirstLetter(names[i], initials)
    }

  	return initials
}


let capatalizeFirstLetter = function(name, initials){
	let currChar = name[0]
    currChar = currChar.toUpperCase()
  	initials += currChar
  	return initials
}



console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'


// popper

// your code here

let popper = function(array, num){
	let removedElements = []

    for(let i = 0; i < num; i++){
    	// let removedElement = array.pop() // 'e', 'd'
    	// removedElements.push(removedElement) // ['e'], ['e', 'd']
      	removeLastThenAddToArray(array, removedElements)
    }

    return removedElements
}

let removeLastThenAddToArray = function(array, array2){
	let removedElement = array.pop()
    console.log(array2, ' == array2')
    array2.push(removedElement)
}

// let removeLastThenAddToArray = function(array, array2, num){
// 	let removedElement = array.splice(-1, num) // ['e']
//     array2.push(removedElement[0])
// }


// let popper = function(array, num){
// 	let removedElements = []

//     removeLastThenAddToArray(array, removedElements, num)

//     return removedElements
// }

		   //0    1    2    3    4
let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]


// Longest Word

// your code here

let longestWord = function(sentence){
	let words = sentence.split(' '); // ['where', 'did', 'everyone', 'go']
  	let currentLongestWord = '';
  	// currentLongestWord.length = 0

  	for(let i = 0; i < words.length; i++){
    	let currentWord = words[i]
        // if(currentLongestWord.length < currentWord.length){
        // 	currentLongestWord = currentWord
        // }
        currentLongestWord = replaceLongestWord(currentLongestWord, currentWord)
    }

  	return currentLongestWord
}

let replaceLongestWord = function(currentLongest, word){
	if(currentLongest.length < word.length){
    	return word
    }
  	return currentLongest
}


console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
