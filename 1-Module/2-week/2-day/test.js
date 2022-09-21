//ARRAYS

let array = []
// console.log(array === [])
// let arr1 = ["hi", "bye"]
// let arr2 = ["hi", "bye"]
// console.log(arr1 == arr2)
// console.log(arr1 === arr2)

// console.log(array.length === 0)
// console.log(!array.length)








//2D Array
let twoDimensional = [["a", "b", "c"], [1, 2, 3], [true, false, true]];

// console.log("twoDimensional[1]:",twoDimensional[2]); // [1, 2, 3]
// console.log("twoDimensional[1][0]:",twoDimensional[2][0]); // 1

let subArr = twoDimensional[0]; //subArr = [1, 2, 3]
// console.log("----------------------------")
// console.log("here is sub array at 0", subArr[0]); // 1




//SPLIT
let sandyQuote = 'Hi my name is Will';
let words = sandyQuote.split(' ')
// console.log(words);




//JOIN
let strArr = ["What", "is", "your", "name?"]
let sentence = strArr.join(' ')
// console.log(sentence);





//SPLIT AND JOIN

let planktonQuote = 'Holographic meatloaf! My favorite!'
let splitArr = planktonQuote.split('meatloaf')
// console.log(splitArr)
let newString = splitArr.join('pizza')
// console.log(newString)
// console.log(planktonQuote)

// let newMeal = planktonQuote.split('meatloaf').join('spaghetti');
// console.log(newMeal);





//SLICE
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// let copyArr = animals.slice()
// console.log(copyArr)
// console.log(animals)

// console.log(animals.slice(1));
// let newAnimalArr = animals.slice(1, 3);

// console.log(animals[1])
// console.log(newAnimalArr[0])
let newAnimalArr = animals.slice(1, 3);
console.log(newAnimalArr)

for (let i = 0; i < animals.length; i++){
console.log(animals[0])
}
// console.log(animals)
