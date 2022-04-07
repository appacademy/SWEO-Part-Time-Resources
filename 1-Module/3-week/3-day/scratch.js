// In python, objects are called dictionaries

// let obj = {
//   name: 'Zaviar',
//   age: 24,
//   game: {
//     name: 'Elden Ring',
//     hours: 135,
//     favWeapon: "Bloodhound's Fang",
//     bossesKilled: [
//       'Godrick the Grafted',
//       'Margit, the Fell Omen',
//       'Rennala, Queen of the Full Moon',
//       'Astel, Natrualborn of the Void',
//     ],
//   },
// };

// let obj2 = {name: "Zaviar", age: 20020384, game:{}}
// let arr = [
// 	"val1",
// 	"val2"
// ]

//How would I print my name from the object?
// console.log(obj.name);
// console.log(obj["name"]);

//How would I add my location, Seattle?
// console.log(obj);
// obj['location'] = 'Seattle';
// obj.location = "Seattle"
// console.log(obj);

//How would I change my age to 32000?
// console.log(obj);
// obj.age = 32000;
// obj['age'] = 32000;
// console.log(obj);

//How would I add "Starscourge Radahn" to the bossesKilled array?
// console.log(obj)
// obj.game.bossesKilled = 'Starscourge Radahn';
// console.log(obj);

// console.log(obj.game.bossesKilled)

// console.log(obj)
// obj.game.bossesKilled.push('Starscourge Radahn');
// console.log(obj);

// let obj = {
//   first: 'a',
//   second: 'b',
//   third: 'c'
// }

// console.log(obj.first, obj['first']) //

// let someVariable = "firstName";
// let some = "second";
// let variable = "Name";
// let time = "FrEQUENcY";

// let obj = {
//   firstName: "Oscar",
//   secondName: "Mayer",
//   frequency: "everyday",
// 	FREQUENCY: "no days"
// };

// console.log(obj[someVariable]); //
// console.log(obj[some + variable]); // "second" + "Name" = "secondName"
// console.log(obj[time.toLowerCase()]); //
// console.log(obj[time.toUpperCase()]); //
// console.log(obj[time]); //

// console.log(obj["firstName"] !== undefined)
// console.log("firstName" in obj)

// let arr = ['name', 50, true];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i])
// }

// let myObj = {
//   2: "I'm at the top of the obj",
//   name: 'Zaviar',
//   age: 24,
//   game: {
//     name: 'Elden Ring',
//     hours: 135,
//     favWeapon: "Bloodhound's Fang",
//     bossesKilled: [
//       'Godrick the Grafted',
//       'Margit, the Fell Omen',
//       'Rennala, Queen of the Full Moon',
//       'Astel, Natrualborn of the Void',
//     ],
//   },
//   music: 'lofi',
//   1: 'Hello',
// };

// for (let key in myObj) {
//   console.log(key, typeof key);
// }

// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// let myEntriesArray = Object.entries(myObj);

// console.log(myEntriesArray[3])
// console.log(myEntriesArray[3][0])
// console.log(myEntriesArray[3][1])

// let arr = ['a', 'b', 'c'];
// 						0    1    2

// let myArr = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
// 	3: 'd'
// };

// [.jpg, "ALWIFJLFIJEFLIEJFLIEJFLIEJF", "javeir"]
// console.log(obj.name)

// let age = 10;
// let numberOfFingers = age;
// age = numberOfFingers + 1;
// console.log(age, numberOfFingers);

let biff = {
  type: 'dog',
  age: 10,
};

// let buster = biff;
// buster.age = 0;
// biff.food = 'bone';

// console.log(biff, buster);

// let buster = {};

// let keys = Object.keys(biff);
// let values = Object.values(biff);

// console.log(keys);
// console.log(values);

// for (let i = 0; i < keys.length; i++) {
//   buster[keys[i]] = values[i];
// 	//buster[]
// }

// console.log(buster);

// buster.age = 1;
// console.log(buster)
// console.log(biff)

let buster = { biff };

console.log(buster);
buster.age = 10000;
buster.biff.age = 2;
console.log(buster);
