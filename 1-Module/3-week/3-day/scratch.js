// let arr = [1, 2, 3];
// let obj = { name: "Mylo", age: 1001 };

// console.log(arr[1]); // index into an array
// console.log(obj["name"]); // key into an obj

// arr[1] = 5;
// console.log(arr);
// obj["age"] += 1;
// console.log(obj);

// let mylo = {
//   name: "Mylo",
//   age: {
//     number: 1000,
//     thirdObj: {
//       id: 3,
//     },
//   },
//   game: {
//     name: "Dota 2",
//     position: 5,
//     favHero: "Dazzle",
//   },
// };

// let nestedArr = [[1], [2]];
// console.log(nestedArr[0][0]);

// console.log(mylo["game"]["name"]);

// let obj3 = {
//   firstName: "Oscar",
//   secondName: "Mayer",
//   thing: "yoooo"
// }

// let thing = 'firstName';

// console.log(obj3[thing]);
// console.log(obj3['firstName']);
// console.log(obj3.firstName);
// console.log(obj3.thing);

// obj3.firstName = 'Joe';

// console.log(obj3);
// obj3.favFood = "sammy";
// console.log(obj3);

// let car = {
//   year: 2012,
//   make: 'Ford',
//   model: 'Explorer',
//   color: 'red',
// }

// console.log(car.wheels !== undefined);
// console.log('wheels' in car);
// for (let key in car) { 
//   console.log(key);
//   console.log(car[key]); // values
// }

// Object.keys()
// let keys = Object.keys(car);

// for (let i = 0; i < keys.length; i++) { 
//   let key = keys[i];
//   console.log(key);
//   console.log(car[key])
// }

// console.log(keys);

// Object.values()
// let values = Object.values(car);
// console.log(values);

/* 
Objects are unordered
*/

// let arr = [2012, 'ford', 'explorer', 'red'];
// let car = {
//   year: 2012,
//   make: "Ford",
//   model: "Explorer",
//   color: "red",
// };

// console.log(car.model)

// Primitive vs. Reference

let age = 10;
let numberOfFingers = age;
age = numberOfFingers + 1;
console.log(age, numberOfFingers);

let biff = {
  type: "dog",
  age: 10,
};

let buster = biff;
buster.age = 0;

console.log(biff, buster);
console.log(biff === buster);










