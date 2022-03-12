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

// your code here
// array solution
// const smoothieMachine = (...args) => {
// 	let smoothie = '';
// 	let fruits = [...args]
// 	return (...moreArgs) => {
// 		let string = "I'm having a smoothie with "
// 		fruits.push(...moreArgs)
// 		return smoothie = string + fruits.join(' and ')
// 	}
// }
// string solution
const smoothieMachine = (...args) => {
	let smoothie = "I'm having a smoothie with " + args.join(' and ')
	return (...moreArgs) => {
		if(!smoothie.endsWith(' ')){
			smoothie += ' and '
		}
		return smoothie += moreArgs.join(' and ')
	}
}


// const smoothieMachine = (func, ...params1) => {
// 	let str = "I'm having a smoothie with "

// 	return (...params2) => {
// 	   str += params1.join(' and ')
// 	   str += params2.join(' and ')
// 	  return str
// 	}
//   }

//I'm having a smoothie with milkkale and spinach

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
