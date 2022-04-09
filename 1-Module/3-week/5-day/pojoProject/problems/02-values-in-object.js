/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns 
an array of all the values within that Object. 


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/
// Object.values
function valuesInObject(obj) {
	// gives me an array of all my values
	return Object.values(obj)
}

// // for in loop
// function valuesInObject(obj) {
//   let finalArr = [];

//   // you access the value of an object using the key
//   // obj[key] = value
//   for (let key in obj) {
//     finalArr.push(obj[key]);
//   }

//   return finalArr;
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
