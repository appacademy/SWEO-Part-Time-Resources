//var dog;

// Global Scope
name_ = 'Alex'
let varName = 'Alex'

// function/local scope
let test = function(){
	let name = 'Alex'
}

// block scope
if('a' === 'b'){
	let randomWord = 'Hello'
}

let test2 = function(){
	let name = 'Patrick'

	// block
	for(let i = 0; i < 10; i++){
		let currentNumber = i
	}

	// console.log(varName)
}

// console.log(test2())

// block scope
let hello = 'hello'

hello = 'hi'


let letVariable = function(){

	let counter = 0

	while(counter < 10){
		let number = counter + 2

		for(let i = 0; i < number; i++){
			let number = 'hi im new number'

			console.log(number, ' hi im number')
			// console.log(number) //
		}

		counter++
	}

	// console.log(number)
}

// console.log(letVariable())

// const variable, blocked scoped

const word = 'Hello World'

// word = 'Javascript is fun'

const obj = {}

obj['1'] = 'Hello World'

const array = []

array[0] = 'first index'

array[0] = 'new value'

word[0] = 'l'

// console.log(obj)
// console.log(array[0])
// console.log(word[0])

// var is a function scoped variable
// if its inside a block scope it gets hoisted outside of it

// console.log(dog)
// var dog = 'dog'


let varFunction = () => {
	var cat = 'cat'

	if(true){
		var animal = 'animal'

		if(true){

			if(true){
				var car = 'car'
				var cat = 'cat2'
			}
		}

	}

	let var2Function = () => {
		var cat = 'cat3'

	}

	return cat
}

// console.log(varFunction())


console.log(party);
var party = "Party!";
console.log(party);
