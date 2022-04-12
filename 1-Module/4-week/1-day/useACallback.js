/* 
Instructions:

Write a callback called 'upper' that:
  1. Intakes an array
  2. Returns an array with all the elements, but uppercase

Write a callback called 'lower' that:
1. Intakes an array
2. Returns an array with all the elements, but lowercase

Write a higher order function called printVals that: 
  1. Intakes two parameters 
    1. An object
    2. An optional callback
  2. If a callback is passed in
    1. Return the result of passing in an array of values from the obj to the cb
  3. Otherwise return an array of values from the obj
*/

// let myNumber;

// console.log(myNumber)

let upper = function (array) {
	let finalArr = [];

	array.forEach(function (ele) {
		finalArr.push(ele.toUpperCase())
	})

	return finalArr
}

let lower = function (array) {
	return array.map(function (ele) {
		return ele.toLowerCase();
	})
}

let printVals = function (obj, cb) {

	let valArray = Object.values(obj)

	if (cb !== undefined) {
		return cb(valArray)
	} else {
		return valArray
	}
}

let user = {
  name: 'ZavIAr',
  location: 'sEaTtLe',
  favLibrary: 'ReAct',
  favGameStudio: 'FroMSofTWarE',
};

console.log(upper(['YeS', 'i', 'DiD', 'It', '!!!'])); // ['YES', 'I', 'DID', 'IT', '!!!']
console.log(lower(['YeS', 'i', 'DiD', 'It', '!!!'])); // ['yes', 'i', 'did', 'it', '!!!']
console.log(printVals(user)); // ['ZavIAr','sEaTtLe', 'ReAct', 'FroMSofTWarE']
console.log(printVals(user, upper)); // ['ZAVIAR', 'SEATTLE', 'REACT', 'FROMSOFTWARE']
console.log(printVals(user, lower)); // ['zaviar', 'seattle', 'react', 'fromsoftware']
