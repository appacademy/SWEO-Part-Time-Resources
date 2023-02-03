/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// let smoothieMachine = (...someItems) => {
// 	return (...items) => {
// 	  someItems = someItems.concat(items)
// 	  return `I'm having a smoothie with ${someItems.join(' and ')}`;
// 	}
// }

// const smoothieMachine = (...ing) => {
// 	let line = "I'm having a smoothie with"
// 	for (let i = 0; i < ing.length; i++) {
// 	  if (addMore) line += ` ${ing[i]} and`
// 	  else line += ` ${ing[i]}`
// 	}

// 	return addMore = (...params) => {
// 	  for (let i = 0; i < params.length; i++) {
// 		if (i === params.length - 1) {
// 		  line += ` ${params[i]}`
// 		} else if (i === 0) {
// 		  line += ` and ${params[i]} and`
// 		} else line += ` ${params[i]} and`
// 	  }
// 	  return line
// 	}
// }

function smoothieMachine (...ingredients) {
	return function(...restOfIngredients) {
		ingredients = ingredients.concat(restOfIngredients);
		let copy = ingredients.slice();
		let smoothie = "I'm having a smoothie with ";
		let result = copy.pop();
		for (let i = 0; i < copy.length; i++) {
			let currentIngredient = copy[i]
			smoothie += currentIngredient + " and "
		}
		smoothie += result
		return smoothie;
	}
}

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
