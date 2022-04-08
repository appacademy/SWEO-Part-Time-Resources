// let obj = { person: 'Caleb', animal: 'elephant' };
// let person = obj["person"];
// let animal = obj.animal;

// console.log(person)
// console.log(animal)

// let { person, animal } = obj
// let { animal, person} = { person: "Caleb", animal: "elephant" };
// let { person, animal } = { person: "Caleb", animal: "elephant" };
// console.log(person, animal);

// let { person: name, animal: species } = { person: "Caleb", animal: "elephant" };
// let { person: name, animal: species } = obj
// let name = obj["person"];
// let species = obj.animal;

// console.log(name, species)
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

// let obj = {
//   music: 'Death Metal',
// };

// let music = "Dreamwave"

// let {name, age, music: favGenre} = zObject

// console.log(music);
// console.log(favGenre)

// let bK = zObject.game.bossesKilled

// let {name: myName} = zObject

// console.log(myName)
// console.log(zObject.name)

// console.log("--------------------")
// myName += "!"
// console.log(myName)
// console.log(zObject.name)
// let {
//   name,
//   age,
//   music,
//   game: { name: gameName, hours, bossesKilled: bk },
// } = zObject;
// let myName = zObject.name;
// let age = zObject.age;
// let music = zObject.music;
// let game = zObject.game;

// console.log('name:', name);
// console.log('age:', age);
// console.log('music:', music);
// // console.log('game:', game);
// console.log('gameName:', gameName);
// console.log('hours:', hours);

// bk.push('New Boss');
// console.log('bk:', bk);
// console.log(zObject)

// let arr = ['Elden Ring', 'Zaviar', 'Radahn'];
// let game = arr[0];
// let player = arr[1];

// let [player, game] = ['Elden Ring', 'Zaviar', 'Radahn'];


// let temp = game
// game = player
// player = temp


// console.log('game:', game);
// console.log('player:', player);
// let [game, player] = ['Elden Ring', 'Zaviar', 'Radahn'];
// console.log('game:', game);
// console.log('player:', player);

// [player, game] = [game, player];
// [game, player] = [player, game];
// console.log('game:', game, "line 101");
// console.log('player:', player);

// let { person, animal } = { person: "Caleb", animal: "elephant" };
// console.log(person);
// console.log(animal);

// [person, animal]
// [animal, person];

// console.log(person)
// console.log(animal)

// [[1, 2, 3], [10, 11, 12], [100, 200, 300]]

// let maxVal = 3
// let minVal = 10

// [maxVal, minVal] = [minVal, maxVal];

// let userResponse = function (...responses) {

// }

// let yellEverything = function (...strings) {
// 	// console.log(Array.isArray(strings));
// 	console.log(strings);
// 	// for (let i = 0; i < strings.length; i++) {
// 	// 	strings[i] = strings[i].toUpperCase();
// 	// }
// 	// return strings.join(' ');
// 	return "don't look at me"
// };

// console.log(yellEverything())

// console.log(yellEverything('hello', 'world'));
// console.log(yellEverything('hello'));
// console.log(yellEverything('Quiet', 'this', "is", 'a', 'library'));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [0, arr1, arr2];
// let arr4 = [0, ...arr1, ...arr2];
// console.log(arr3);
// console.log(arr4);

// let obj1 = { name: 'Zaviar' };
// let obj2 = { platform: 'PC', game: 'Elden Ring' };
// let obj3 = { obj1, obj2, music: 'Lofi' };
// let obj4 = { ...obj1, ...obj2, music: 'Lofi' };
// console.log(obj3);
// console.log(obj4);

// obj1.name = 'Will';

// console.log(obj3);
// console.log(obj4);

// let newObj = {...ob1}