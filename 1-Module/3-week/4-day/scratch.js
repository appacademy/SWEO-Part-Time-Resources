// Primitives - Immutable types
// Reference  - Mutable Types

let cat1 = {name: 'Apples', breed: 'Tabby'}
let cat2 = cat1;

cat1.name = 'Fluffy'
cat2.name = 'Tiger'
// console.log(cat1);
// console.log(cat2);

// Spread Syntax and Rest Syntax

let sumAll = (...nums) => {
  let newArr = [...nums, 5,6,7, ...nums];

  // console.log(newArr);
}

// console.log(sumAll(1,2,3))

cat1.name = 'Whiskers';
cat2 = {...cat1, temperment: 'happy'};
// console.log(cat1);
// console.log(cat2);

// Destructuring
let words = ['hello', 'how', 'are', 'you'];
let [el0, el1, el2, el3, el4] = words;

// console.log(el0, el1, el2, el3, el4);
// console.log(words);

let pair = ['Manny', 'Audi'];

const [owner, brand] = pair;
// console.log( owner, brand )
let num1 = 17;
let num2 = 3;
let numbers = [17, 3];

[numbers[1], numbers[0]] = [numbers[0], numbers[1]];
// console.log( numbers)
numbers[0] = 15
// console.log( numbers)

cat1 = {name: 'Apples', breed: 'Tabby'}

const {name: newName} = cat1;
// console.log(newName);

let car = {
  make: 'Honda',
  trunkStuff: {
    maps: ['ohio', 'arizona']
  }
}

let {
  trunkStuff: {
    maps
  }
} = car

console.log(newMaps);