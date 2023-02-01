// higher order functions?
// they are functions that can take a function and return a function

// first class objects?
// they have built in properties and methods
// properties and methods can be added to them
// they can be passed in as arguments, they can be returned from functions
// they can be assigned

const newArr = new Array() // []

// function test(){
// 	console.log('hello world')
// }

// newArr.xyz = test

// newArr.xyz()


// callback function?
// all callbacks are functions, but not all functions are callback functions


// const printQuote = (callback) => {
// 	const quote = `Life is what happens when you're busy making plans`
// 	return callback(quote)
// }


// const uppercase = function(str){ return str.toUpperCase()}

// const lowercase = function(str){ return str.toLowerCase()}

// const capatilizeWords = (str) => {
// 	const words = str.split(' ')
// 	const newWords = []
// 	for(let i = 0; i < words.length; i++){
// 		const word = words[i]
// 		let capitalWord = word.charAt(0).toUpperCase() + word.slice(1, word.length)
// 		newWords.push(capitalWord)
// 	}
// 	return newWords.join(' ')
// }

const compareNumbers = (num1, num2, cb1, cb2) => {
	if (cb1(num1) === cb2(num2)) return true
	else return false
}

console.log(compareNumbers(1, 2, function(num){
	if(num === 1) return true
	else return false
}, (num)=> {
	if(num == 2) return true
	else return false
}))

const if1 = (num)=> {
	if(num == 1) return true
	else return false
}

const if2 = (num)=> {
	if(num == 2) return true
	else return false
}

console.log(compareNumbers(1, 2, if1, if2))

// const twoNumbers = (num1, num2, callback) => {
// 	return callback(num1, num2)
// }

// function add(num1, num2) {
// 	return num1 + num2
// }

// function minus(num1, num2) {
// 	return num1 - num2
// }

// function multiply(num1, num2) {
// 	return num1 * num2
// }


// console.log(twoNumbers(5, 10, multiply))

// console.log(printQuote(capatilizeWords))
