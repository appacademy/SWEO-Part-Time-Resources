/***********************************************************************
Write a function using fat arrow syntax, `arrowGetFullName(person)` that takes in
a person object and returns a string containing their full name.

Assign the below function to a variable using the const keyword. Using the const
keyword will allow any value assigned to that variable protection from being
reassigned within that scope.

Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
arrowGetFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
arrowGetFullName(p2); // => 'Charlie Brown'

***********************************************************************/

// const arrowGetFullName = (person) => {
// 	// const newArr = [person.firstName, person.lastName]
// 	// // newArr.push(person.firstName, person.lastName)

// 	// return newArr.join(' ')

// 	const newArr = []
// 	const keys = Object.keys(person) // ['firstName', 'lastName']
// 	for(let i = 0; i < keys.length; i++){
// 		if(keys[i] === 'firstName' || keys[i] === 'lastName'){
// 			newArr.push(person[keys[i]])
// 		}
// 	}
// 	return newArr.join(' ')
// }

// const arrowGetFullName = (obj) => {
// 	let nameArr = [];
// 	let nameStr = '';
// 	for (key in obj) {
// 	  nameArr.push(obj[key]);
// 	}
// 	for (let i = 0; i < 2; i++) {
// 	  nameStr = nameStr + ' ' + nameArr[i];
// 	}
// 	console.log(nameStr);
//   };

// const arrowGetFullName = person => `${person.firstName} ${person.lastName}`

const arrowGetFullName = person => person.firstName + ' ' + person.lastName

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowGetFullName;
} catch (e) {
  module.exports = null;
}
