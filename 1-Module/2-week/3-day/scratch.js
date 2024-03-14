// ! Functions return "undefined" by default!

//? Removes all words from the sentence with the letter "e"
let removeEWords = function (sentence) {
    // let sentArr = sentence.split(); // Exactly the same as let sentArr = [sentence];
    let sentArr = sentence.split(" ");
    let arrWithoutE = [];

    for (let i = 0; i < sentArr.length; i++) {
        let currWord = sentArr[i];

        if (!hasE(currWord)) {
            arrWithoutE.push(currWord);
        }
    }

    let sentWithoutE = arrWithoutE.join(" ");

    return sentWithoutE;
};

//? Which words have the letter e?
let hasE = function (word) {
    let lowerWord = word.toLowerCase();

    if (lowerWord.includes("e")) {
        return true;
    } else return false;
};

// let eWord = "Hello";
// let notEWord = "Blubrry";

// console.log(findEWords(eWord));
// console.log(findEWords(notEWord));

// let removeEWords = (sentence) => sentence.split(" ").filter(word => !hasE(word)).join(" ")

// let hasE = (word) => word.toLowerCase().includes("e");

// console.log(hasE("Hey"));
// console.log(hasE("Hyyy"));

// let sent1 = "Elden Ring is the greatest game of all time fight me";

// let sent2 = "I have three cats, Momo, Tenten, Kiki";

// console.log(removeEWords(sent1));
// console.log(removeEWords(sent2));

// Returns a string "echo-ized"
// let echo = function (string) {
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";

//     // use helper here

//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
// };

// let myHelper = function () {
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";
//     let nextStep = "this thing";

//     return useFulThing;
// };

//! --------------------------------------------------------------------
//*                                   Uncompress
//! --------------------------------------------------------------------
// every 2 characters are a "pair"

// let uncompress = function (str) {

//   	let finalString = "";

// 	for (let i = 0; i < str.length; i += 2) {
//      	let currLetter = str[i]
//      	let currNumber = Number(str[i + 1])

// 		for (let repeater = 0; repeater < currNumber; repeater++) {
//          	 finalString += currLetter
//         }
//     }

//   return finalString

// }

let findEachLetter = function (str) {
    let letterArr = [];

    for (let i = 0; i < str.length; i += 2) {
        let currLetter = str[i];

        letterArr.push(currLetter);
    }

    return letterArr;
};

let findEachNumber = function (str) {
    let numberArr = [];

    for (let i = 1; i < str.length; i += 2) {
        let currNumber = Number(str[i]);

        numberArr.push(currNumber);
    }

    return numberArr;
};

let uncompress = function (str) {
    let finalString = "";
    let letterArr = findEachLetter(str);
    let numberArr = findEachNumber(str);

    for (let i = 0; i < letterArr.length; i++) {
        let currLet = letterArr[i];
        let currNum = numberArr[i];

        finalString += currLet.repeat(currNum);
    }

    return finalString;
};

console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
console.log(uncompress("a5b2c4z1")); // 'aaaaabbccccz'
console.log(uncompress("b1o2t1")); // 'boot'

//! --------------------------------------------------------------------
//*                               Popper
//! --------------------------------------------------------------------

// num is the number of elements to remove from arr
// keep track of all removed elements
// num is my loop number

let popper = function (arr, num) {
    let finalArr = [];

    for (let i = 0; i < num; i++) {
        let lastVal = arr.pop();

        finalArr.push(lastVal);
    }

    return finalArr;
};

// let popper = function (arr, num) {

//   	let finalArr = [];

//   	for (let i = 0; i < num; i++) {
// 		popAndPush(arr, finalArr)
//     }

//   return finalArr
// }

// let popAndPush = function (arrayToPop, arrayToPush) {
// 	let lastVal = arrayToPop.pop()

// 	arrayToPush.push(lastVal)
// }

let arr1 = ["a", "b", "c", "d", "e"];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ["kale", "spinach", "collard greens", "cabbage"];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

//   	for (let i = 0; i < num; i++) {
// 		let nextIndex = 1 + i
//         let currentLetter = arr[arr.length - nextIndex]

//         console.log(currentLetter)
//     }

//! --------------------------------------------------------------------
//*                             Choose Primes
//! --------------------------------------------------------------------

// if num % other === 0, NOT PRIME

let isPrime = function (num) {
    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) {
            return false;
        }
    }

    return true;
};

let choosePrimes = function (arr) {
    let finalArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];

        if (isPrime(currNum)) {
            finalArr.push(currNum);
        }
    }

    return finalArr;
};

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
