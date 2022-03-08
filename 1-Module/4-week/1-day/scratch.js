
let func1 = function(){
	console.log('I\'m stored in a variable');
};

// console.log(func1());
// console.log(func1) // [Function: func1]
// console.log(typeof func1) // function

let higherOrderFunction = function(callback){
    callback();
};

let intoAFunction = function() {
	console.log('I\'m being passed into a function');
};

let intoAFunctionPt2 = function() {
	console.log('I\'m ALSO being passed into a function');
}

let intoAFunctionCeption = function(callback, func){
	// higherOrderFunction(intoAFunction);
	callback(func)
	return "hi im into a function ception's return"
}

// higherOrderFunction(intoAFunction); // 'I\'m being passed into a function'
// higherOrderFunction(intoAFunctionPt2); // 'I\'m ALSO being passed into a function'

// console.log(intoAFunctionCeption(higherOrderFunction, intoAFunction)) // 'I\'m being passed into a function'



let manipulateWords = function(words, action){
	let newWords = [];

	for(let i = 0; i < words.length; i++){
		let word = words[i]
		if(action === 'uppercase'){
			newWords.push(word.toUpperCase())
		} else if(action === 'lowercase'){
			newWords.push(word.toLowerCase())
		}

	}

	return newWords;
}

// console.log(manipulateWords(['daniel', 'alex', 'megha', 'micheal', 'patrick'], 'uppercase'))
// console.log(manipulateWords(['daniel', 'alex', 'megha', 'micheal', 'patrick'], 'lowercase'))



let manipulateWordsCallback = function(words, callback){
	let newWords = [];

	for(let i = 0; i < words.length; i++){
		let word = words[i]
		newWords.push(callback(word))
	}

	return newWords;
}

let capitalize = function(word){
	let newWord = '';
	newWord = word[0].toUpperCase() + word.slice(1)
	return newWord
}

let removeWordsWithA = function(word){
	let newWord = '';
	if(!word.includes('a')){
		newWord = word
	}
	return newWord
}

console.log(manipulateWordsCallback(['daniel', 'alex', 'megha', 'micheal', 'patrick'], removeWordsWithA))
