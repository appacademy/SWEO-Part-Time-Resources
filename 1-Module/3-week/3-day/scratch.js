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
// 	music: "Lofi"
// };

// console.log(obj.name)
// console.log(obj.game.name)
// console.log(obj.music)

// console.log(game.favWeapon)
// console.log(obj["game"]["bossesKilled"][0])
// console.log(obj.game.bossesKilled[0])

// console.log(obj["location"] !== undefined)
// console.log(obj[location] !== undefined)
// console.log(obj.location === undefined)
// console.log("name" in obj)
// if ('name' in obj) {
//   console.log(obj.name);
// } else {
//   obj.name = 'Will';
// 	console.log(obj.name)
// }

// console.log(obj)

//How would I print my name from the object?
// console.log(obj['name']);
// console.log(obj.name);
// console.log(obj[name])

//How would I add my location, Seattle?
// console.log(obj);
// obj['location'] = 'Seattle';
// console.log(obj);

//How would I change my age to 32000?
// console.log(obj);
// obj.age = 32000;
// obj['age'] = 32000;
// console.log(obj);

//How would I add "Starscourge Radahn" to the bossesKilled array?
// console.log(obj.game.bossesKilled)
// obj.game.bossesKilled = ['Starscourge Radahn'];
// console.log(obj);
// obj.game.bossesKilled.push('Starscourge Radahn');
// console.log(obj.game.bossesKilled.length);

// obj.game.bossesKilled

// let obj = {
//   first: 'a',
//   second: 'b',
//   third: 'c',
// 	// myVariable: "d"
// }

// let myVariable = "third"

// console.log(obj.first, obj['first']) //

// console.log(obj[myVariable])

// console.log(obj["myVariable"])
// console.log(obj.myVariable)

// let someVariable = 'firstName';
// let some = 'second';
// let variable = 'Name';
// let time = 'FrEQUENcY';

// let obj = {
//   firstName: 'Oscar',
//   secondName: 'Mayer',
//   frequency: 'everyday',
//   FREQUENCY: 'no days',
//   // 1: 'this is number 1',
// };

// console.log(obj[someVariable]); //
// console.log(obj[some + variable]); //
// console.log(obj[time.toLowerCase()]); //
// console.log(obj[time.toUpperCase()]); //
// console.log(some + variable);

// for (let key in obj) {
//   console.log(typeof key);
// 	console.log(key)
// }
// let obj = {name: "zaviar", age: 10000}

// let myArr =[
// 	      'Godrick the Grafted',
// 	      'Margit, the Fell Omen',
// 	      'Rennala, Queen of the Full Moon',
// 	      'Astel, Natrualborn of the Void',
// 	    ]

// for (let i = 0; i < myArr.length; i++) {
// 	console.log(myArr[i])
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
//   music: 'Lofi',
//   1: 'Hey there',
// };

// for (let key in myObj) {
//   console.log(key);
// }

// console.log(Object.keys(myObj))
// console.log(Object.values(myObj))
// let myEntries = Object.entries(myObj);
// console.log(myEntries);
// let firstArray = myEntries[0];
// console.log(firstArray[0]);

// let arr = ['Zaviar', 24, 'Elden Ring'];
// let obj = {
// 	age: 24,
// 	game: "Elden Ring",
// 	name: "Zaviar"
// }
// console.log(arr[1])
// console.log(obj.name)

// let myArr = {
// 	0: "firstVal",
// 	1: "secondVal",
// 	2: "value"
// }

// let age = 10;
// let numberOfFingers = age;
// age = numberOfFingers + 1;
// console.log(age, numberOfFingers);

// let biff = {
// 	type: 'dog',
// 	age: 10,
// };

// let buster = biff;
// buster.age = 0;

// // console.log(biff, buster);

// biff.name = "biff"
// console.log(biff, buster);

// let biff = {
//   type: 'dog',
//   age: 10,
// };

// let biffKeys = Object.keys(biff);
// let biffValues = Object.values(biff);

// console.log(biffKeys);

// let buster = {}

// for (let i = 0; i < biffKeys.length; i++) {
// 	console.log(biffKeys[i])
// 	buster[biffKeys[i]] = biffValues[i]
// }

// console.log(buster)
// buster.age = 100
// console.log(buster)
// console.log(biff)