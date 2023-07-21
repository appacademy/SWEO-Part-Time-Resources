/*
Destructuring
*/

let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

let [ food, num1, num2, num3, obj, bestPizzaToppings, undef ] = bigArray

console.log(food)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(obj)
console.log(bestPizzaToppings)
console.log(undef)


// let bigObj = {
//   food: "apple", 
//   num1: 14, 
//   num2: 32, 
//   num3: 100, 
//   littleObj: { name: "party" }, 
//   bestPizzaToppings: ["pineapple"]
// }

// let {food, undef, ...objCopy} =  bigObj

// objCopy['oh nooo'] = 'bad'

// // console.log(food)
// console.log(objCopy)

// console.log(undef)




/*
Spread
*/
// const spreadItOut = (array1, array2) => {
// 	return [...array1, ...array2]
// }

// console.log(spreadItOut([3,5,6], [1,2,3])); // => [3,5,6,1,2,3];
// console.log(spreadItOut([], [1,2,3])); // => [1,2,3];
// console.log(spreadItOut(["apple", "banana"], [1,2,3])); // => ["apple", "banana", 1, 2, 3];




/*
Break down object 
*/

// let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
// let object2 = {location: 'NY', borough: 'Brooklyn'};

// const breakDownObj = obj => {
// 	let keys = Object.keys(obj)
// 	let vals = Object.values(obj)
// 	return [...keys, ...vals]	
// }

// console.log(breakDownObj(object1));          // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
// console.log(breakDownObj(object2));          // => [ 'location', 'borough', 'NY', 'Brooklyn' ]



/*
Spread Rest
*/


// const arr = [1, "two", "3"];

// const obj = {
//     red: "circle",
//     blue: "square",
//     green: "hexagon"
// }

// let [...arrRest] = arr

// let arrSpread = [...arr]

// let {...objRest} = obj

// let objSpread = {...obj}

// console.log(arrRest);           // [1, "two", "3"]
// console.log(arrSpread);         // [1, "two", "3"]

// console.log(objRest);           // { red: "circle", blue: "square", green: "hexagon" }
// console.log(objSpread);         // { red: "circle", blue: "square", green: "hexagon" }



/*
Obj Clone
*/

// const obj = {
//     red: "circle",
//     blue: "square",
//     green: "hexagon"
// }

// let {green, ...objClone } = { yellow:'pentagon', ...obj }

// console.log(objClone);          // { red: "circle", blue: "square", yellow: "pentagon" }
// console.log(green);             // hexagon
// // console.log(obj)				// should be unchanged


