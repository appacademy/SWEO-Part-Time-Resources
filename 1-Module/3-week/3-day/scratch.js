// let arr = [1, 2, 3]; // brackets, elements at index(s)
// let mylo = { age: 1000, name: 'Mylo' }; // brackets (curly), values at keys

// console.log(arr[1]) // indexing into the array at index 1
// console.log(mylo['age']) // keying into the object at 'age'

// arr[1] = 5;
// console.log(arr);
// mylo['age'] = 1001;
// console.log(mylo);
// mylo['location'] = "Chicago";
// console.log(mylo);

// let attr = 'name';
// console.log(attr);
// console.log(mylo[attr]); // mylo['name']

// console.log(mylo['age']); // keying into the object at 'age'
// console.log(mylo.age);
// WE DON'T USE DOT NOTATION WHEN WANTING TO USE A VARIABLE

// let obj = {
//   name: "Mylo",
//   age: 1000,
//   game: {
//     name: "Dota 2",
//     position: 5,
//     favHero: "Dazzle",
//   },
// };

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// console.log(arr[0][2]);
// console.log(obj['game']['name'])
// console.log(obj.game.name)

// checking to see if a key is in an object

// let obj2 = {
//   firstName: "Oscar",
//   secondName: "Mayer",
// }

// console.log(obj2.firstName !== undefined);
// console.log('firstName' in obj2);

// let car = {
//   year: 2001,
//   make: "Ford",
//   model: "Explorer",
//   color: "pink",
// };

// // for in loop
// for (let key in car) { 
//   console.log(key);
//   console.log(car[key])
//   console.log('-----')
// }
// // Object.keys
// let keys = Object.keys(car);
// console.log(keys);
// for (let i = 0; i < keys.length; i++) { 
//   let key = keys[i];
//   console.log(key);
//   console.log(car[key]);
//   console.log('---');
// }
// // Object.values
// let values = Object.values(car);
// console.log(values)
// for (let i = 0; i < values.length; i++) {
//   let value = values[i];
//   console.log(value);
//   console.log("---");
// }

// Object.entries
  // for your research!!

  /*
    Object are UNORDERED
    Constant time lookup
  */





let age = 10;
let numberOfFingers = age;
age = numberOfFingers + 1;
console.log(age, numberOfFingers); // 11, 10






let biff = {
  type: "dog",
  age: 10,
};

let buster = biff;
buster.age = 0;

console.log(biff, buster); // Two objs with age 0
console.log(biff === buster)