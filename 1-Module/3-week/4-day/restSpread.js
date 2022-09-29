//REST
// let yellEverything = function (...strings) {
//     // console.log("IS IT AN ARRAY?", Array.isArray(strings));
//     console.log("STRINGS", strings)
//     for (let i = 0; i < strings.length; i++) {
//       strings[i] = strings[i].toUpperCase();
//     }
//     return strings.join(' ');
// };

// console.log(yellEverything('hello', 'world'));
// console.log(yellEverything('hello'));
// console.log(yellEverything('Quiet', 'this', "is", 'a', 'library'));

//SPREAD
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, arr1, arr2];
arr1 = ["test","cat","apple"]
let arr4 = [0, ...arr1, ...arr2];
// console.log("ARR3", arr3);
console.log("ARR4", arr4);

// let obj1 = { name: 'Blake' };
// let obj2 = { platform: 'PC', game: 'Elden Ring' };
// let obj3 = { obj1, obj2, music: 'Lofi' };
// let obj4 = { ...obj1, ...obj2, music: 'Lofi' };
// // console.log("OBJ3", obj3);
// // console.log("OBJ4", obj4);

// obj1.name = 'Will';

// console.log("OBJ3", obj3);
// console.log("OBJ4", obj4);
