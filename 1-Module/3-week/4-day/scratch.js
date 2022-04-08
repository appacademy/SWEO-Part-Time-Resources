// let obj = { person: "Caleb", animal: "elephant" };
// let person = obj['person']
// let animal= obj.animal

// let obj = { person: 'Caleb', animal: 'elephant' };
// // let { person, animal } = obj
// let { animal, person } = obj;

// console.log('person:', person);
// console.log('animal:', animal);

// let { person: name, animal: species } = obj;

// console.log('name:', name);
// console.log('species:', species);

// console.log(obj)

// let zObject = {
//   name: 'Zaviar',
//   age: 24,
//   music: 'Lofi',
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
// let name = zObject.name
// let myName = zObject.name

// let {
//   name: myName,
//   music,
//   game: { name: gameName },
// } = zObject;

// console.log('myName:', myName);
// console.log("music:", music)
// console.log("game:", game)
// console.log('gameName:', gameName);

// let arr = ['Elden Ring', 'Zaviar', 'Radahn'];
// let game = arr[0];
// let player = arr[1];

// let [game, player] = ['Elden Ring', 'Zaviar', 'Radahn'];
// let [player, game] = ['Elden Ring', 'Zaviar', 'Radahn'];
// let [game, , boss] = ['Elden Ring', 'Zaviar', 'Radahn'];
// let arr = ['Elden Ring', 'Zaviar', 'Radahn'];
// let game = arr[0]
// let boss = arr[2]
// console.log('game:', game);
// console.log('boss:', boss);

// console.log("game:", game)
// console.log("player:", player)


// let zaviar = "Elden God"
// let will = "Elden Baby"

// console.log("zaviar:", zaviar);
// console.log("will:", will);

// let temp = zaviar
// zaviar = will
// will = temp

// [zaviar, will] = [will, zaviar];


// console.log("zaviar:", zaviar)
// console.log("will:", will)

// let userInput = function(...responses) {

// }

// let userInput = function(responseOne, responseTwo) {
	
// }

// let yellEverything = function (...strings) {
// 	// console.log(Array.isArray(strings));
// 	// console.log(strings)
// 	for (let i = 0; i < strings.length; i++) {
// 		strings[i] = strings[i].toUpperCase();
// 	}
// 	return strings.join(' ');
// };

// console.log(yellEverything('hello', 'world'));
// console.log(yellEverything('hello'));
// console.log(yellEverything('Quiet', 'this', "is", 'a', 'library'));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [0, arr1, arr2];
// let arr4 = [0, ...arr1, ...arr2];
// console.log(arr3);
// console.log(arr4);

let obj1 = { name: 'Zaviar' };
let obj2 = { platform: 'PC', game: 'Elden Ring' };
let obj3 = { obj1, obj2, music: 'Lofi' };
let obj4 = { ...obj1, ...obj2, music: 'Lofi' };
// console.log(obj3);
// console.log(obj4);


let newObj = obj1
obj1.name = 'Will';

console.log(obj3);
console.log(obj4);

console.log(newObj)
