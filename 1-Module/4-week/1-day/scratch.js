
let func1 = function(){
	console.log('I\'m stored in a variable');
};

// console.log(func1); // [Function: func1]
// console.log(func1());
// console.log(typeof func1) // function


let higherOrderFunction = function(callback){
    callback(); // invoking intoAfunction
};

let intoAFunction = function() {
	console.log('I\'m being passed into a function');
};

let intoAFunctionPt2 = function() {
	console.log('I\'m ALSO being passed into a function');
}

let intoAFunctionCeption = function(callback, func){
	callback(func)
}

// higherOrderFunction(intoAFunction); // intoAFunction()
// higherOrderFunction(intoAFunctionPt2);

// higherOrderFunction(1) // typeError callback is not a function

// intoAFunctionCeption(higherOrderFunction, intoAFunction) // 'I\'m being passed into a function'




let manipulateWords = function(words, action){
	let manipulatedWords = []

	for(let i = 0; i < words.length; i++){
		if(action === "uppercase"){
			manipulatedWords.push(words[i].toUpperCase())
		} else if(action === "lowercase"){
			manipulatedWords.push(words[i].toLowerCase())
		} else if(action === 'capitalize'){
			manipulatedWords.push(words[0].toUpperCase() + words.slice(1))
		}
	}

	return manipulatedWords
}

// console.log(manipulateWords(['alex', 'patrick', 'reyhaneh', 'jeremiah'], 'uppercase'))
// console.log(manipulateWords(['alex', 'patrick', 'reyhaneh', 'jeremiah'], 'capitalize'))


let manipulateWordsCallback = function(words, callback){
	let manipulatedWords = []

	for(let i = 0; i < words.length; i++){
		manipulatedWords.push(callback(words[i]))
	}

	return manipulatedWords
}

let capitalize = function(word){
	let newWord = '';
	newWord = word[0].toUpperCase() + word.slice(1)
	return newWord
}

let removeWordsWithE = function(word){
	let newWord = '';

	if(!word.includes('e')){
		newWord = word
	}

	return newWord
}

// console.log(manipulateWordsCallback(['alex', 'patrick', 'reyhaneh', 'jeremiah'], capitalize))
// console.log(manipulateWordsCallback(['alex', 'patrick', 'reyhaneh', 'jeremiah'], removeWordsWithE))

let map = function(array, callback){
	let newArray = []

	for(let i = 0; i < array.length; i++){
		let element = array[i]
		newArray.push(callback(element))
	}

	return newArray
}


console.log(map([1, 4, 9, 16], x => x * 2)) // [2, 8, 18, 32]
console.log(map([1, 4, 9, 16], function(x){
	return x * 2
})) // [2, 8, 18, 32]


console.log(map([1, 4, 9, 16], function(x){
	return x + 1
})) // [ 2, 5, 10, 17 ]
