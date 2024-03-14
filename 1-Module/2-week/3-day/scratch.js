// Solution without helper function
// sentence is a string
// function removeEWord(sentence) {
//     let sentenceArray = sentence.split(" ")

//     let newSentence = []

//     for (let i = 0; i < sentenceArray.length; i++) {
//         let currentWord = sentenceArray[i]

//         if (currentWord.toLowerCase().includes("e")) {
//             return true
//         }
//     }

//     return newSentence.join(" ")
// }


// ------------------------------------------------------------------------

// // helper function
// function isEWord(word) {
//     if(word.toLowerCase().includes("e")) {
//         return true
//     }

//     return false
// }

// // sentence is a string
// function removeEWord(sentence) {
//     let sentenceArray = sentence.split(" ")

//     let newSentence = []

//     for(let i = 0; i < sentenceArray.length; i++) {
//         let currentWord = sentenceArray[i]

//         if(!isEWord(currentWord)) {
//             newSentence.push(currentWord)
//         }
//     }

//     return newSentence.join(" ")
// }


// function onlyEWord(sentence) {
//     let sentenceArray = sentence.split(" ")

//     let newSentence = []

//     for(let i = 0; i < sentenceArray.length; i++) {
//         let currentWord = sentenceArray[i]

//         if(isEWord(currentWord)) {
//             newSentence.push(currentWord)
//         }
//     }

//     return newSentence.join(" ")
// }



// let sentence1 = "Evn I have no mouth, and I must scream."

// // // console.log(removeEWord(sentence1))
// // console.log(onlyEWord(sentence1))


// // Chaining multiple helper functions
// function mainFunction() {
//     let helper1Result = helperFunction1()
//     let helper2Result = helperFunction2(helper1Result)
//     // ...
// }



// // Helper function that doesn't return boolean

// function reverseString(string) {
//     let reversedWord = ""
//     for (let j = string.length - 1; j >= 0; j--) {
//         reversedWord += string[j]
//     }

//     return reversedWord
// }


// // take in an array of strings. You want reverse the order of the array
// // AND reverse the string
// function reverseArrayAndString(array) {
//     let reverseArray = []

//     for (let i = array.length - 1; i >= 0; i--) {
//         let currentWord = array[i]

//         let reversedWord = reverseString(currentWord)

//         reverseArray.push(reversedWord)
//     }

//     return reverseArray

// }


// function reverseEachString(array) {
//     let newArray = []

//     for(let i = 0; i < array.length; i++) {
//         newArray.push(reverseString(array[i]))
//     }

//     return newArray
// }

// let array = ['hello', 'my', 'name', 'is', 'world'] // ['dlrow', 'si', 'eman', 'ym', 'olleh']


// // console.log(reverseArrayAndString(array))
// console.log(reverseEachString(array))


// ------------------------------------------------------------------------
// If helper function is initialized inside a larger function:


// function reverseEachString(array) {
//     let newArray = []

//     for (let i = 0; i < array.length; i++) {
//         newArray.push(reverseString(array[i]))
//     }

//     // // function DECLARATION works if created after the invocation. because of hoisting (you'll learn this later)
//     // function reverseString(string) {
//     //     let reversedWord = ""
//     //     for (let j = string.length - 1; j >= 0; j--) {
//     //         reversedWord += string[j]
//     //     }

//     //     return reversedWord
//     // }

//     // // function EXPRESSION does not work if created after invocation. does not get hoisted
//     // let reverseString = function (string) {
//     //     let reversedWord = ""
//     //     for (let j = string.length - 1; j >= 0; j--) {
//     //         reversedWord += string[j]
//     //     }

//     //     return reversedWord
//     // }

//     return newArray
// }



// reverseEachString there is a "reverseString", use that please.

// let array = ['hello', 'my', 'name', 'is', 'world'] // ['dlrow', 'si', 'eman', 'ym', 'olleh']

// console.log(reverseEachString(array))



// ------------------------------------------------------------------------
// Helper function main goal:
    // DRY your code
    // Don't Repeat Yourself
