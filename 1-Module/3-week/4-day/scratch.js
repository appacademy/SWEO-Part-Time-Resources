// Yee-haw Lecture
/* Reference Types vs. Primitive Types */
// reference: arrays, objects - mutable data types
// primitive: numbers, strings, booleans, undefined, null - immutable data types

let cat1 = {
  name: 'Apples',
  breed: 'Tabby'
};
let cat2 = cat1;

cat1.name = 'Fluffy';
cat2.name = 'Whiskers';

cat2 = {name: 'Tabby', breed: 'Sphinx'}
// console.log('Cat 1:', cat1);
// console.log('Cat 2:', cat2);
/* Spread and Rest Syntax */
const sum = (num1, num2, num3, ...nums ) => {
  let sum = [num1, nums];
  return sum;
}

// console.log( sum(4, 5, 6, 7) );

let arr = ['hello', 'hi', 'howdy'];
let newArr = [ ...arr, 'hey' ]
// console.log(newArr)

let obj = {...cat1, temperment: 'Happy'};
// console.log(obj);
// console.log(cat1);

/* Destructuring Arrays */
// let arr = ['hello', 'hi', 'howdy']
// let first;
// let second;

let [first, second, three] = arr;

// [[third, fourth], fifth] = [second, first];
three = 45;
console.log(first, second, three); //This semi-colon messed up everything
[second, first] = [first, second];
console.log(first, second);
// first = 42;

// console.log(arr)
let matrix = [['Toby', 'Honda'], ['Tristan','Bike']]

let curr = matrix[0];

let owner;
let brand;
[owner, brand] = curr;

// console.log( owner, brand );
/* Destructuring POJOs */
/*
let cat1 = {
  name: 'Apples',
  breed: 'Tabby'
};
*/

const {name: newName, breed, size} = cat1;
//cat1.size === undefined;
console.log(newName, breed, size);
let cat3 = {
  name: 'Apples',
  breed: 'Tabby'
};
let toyArr = [];

let newCat = {...cat3, size: 'big', toys: [...toyArr]};
console.log(newCat);

