/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/

// const sandwichMaker = () => {
// 	const newArr = ['tomato']
// 	return sandwitch = (str) => {
// 		newArr.push(' and ' + str)
// 		return 'One sandwich with ' + newArr.join('')
// 	}
// }

function sandwichMaker(){

	let badVariableName = "One sandwich with tomato "

	function worseVariableName(func) {
		badVariableName = badVariableName + ' and ' + func
		return badVariableName
	}

	return worseVariableName
}


let sandwich = sandwichMaker(); // => returns a function
console.log(sandwich("spinach")) // => "One sandwich with tomato and spinach"
console.log(sandwich("jelly")) // => "One sandwich with tomato and spinach and jelly"
console.log(sandwich("bread")) // => "One sandwich with tomato and spinach and jelly and bread"

let sandwich2 = sandwichMaker(); // => returns a function
console.log(sandwich2("pb")) // => "One sandwich with tomato and pb"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
