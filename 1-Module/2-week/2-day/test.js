//ARRAYS

let array = []
// let arr1 = ["hi", "bye"]
// let arr2 = ["hi", "bye"]
// console.log(arr1 == arr2)
// console.log(arr1 === arr2)

// console.log(array.length === 0)
// console.log(!array.length)








//2D Array
let twoDimensional = [["a", "b", "c"], [1, 2, 3], [true, false, true]];

// console.log("twoDimensional[1]:",twoDimensional[1]); // [1, 2, 3]
// console.log("twoDimensional[1][0]:",twoDimensional[1][0]); // 1

let subArr = twoDimensional[1]; //subArr = [1, 2, 3]
// console.log("subArr[0]:", subArr[0]); // 1




//SPLIT
let sandyQuote = 'Hi my name is Will';
let words = sandyQuote.split(' ')
// console.log(words);




//JOIN
let strArr = ["What", "is", "your", "name", "?"]
let sentence = strArr.join(' ')
// console.log(sentence);





//SPLIT AND JOIN

let planktonQuote = 'Holographic meatloaf! My favorite!'
let splitArr = planktonQuote.split('meatloaf')
// console.log(splitArr)
let newString = splitArr.join('pizza')
// console.log(newString)
// console.log(planktonQuote)

let newMeal = planktonQuote.split('meatloaf').join('spaghetti');
// console.log(newMeal);





//SLICE
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let copyArr = animals.slice()
console.log(copyArr)
console.log(animals)
console.log(copyArr === animals)
// console.log(animals.slice(1));
// console.log(animals.slice(1, 3));
// console.log(animals)
