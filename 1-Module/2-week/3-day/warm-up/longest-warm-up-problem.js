// longWords Helper function
//longWords takes in: array of words
//returns: array that contains words that have more than 5 letters.
//input: ['couscous', 'soup', 'ceviche', 'solyanka' ,'taco']
//out: [ 'couscous', 'ceviche', 'solyanka' ] <--words w/ 6+ letters
let longWords = function(words){
	let longestWords = []
    
    for(let i=0; i<words.length; i++){
    	let currentWord = words[i];
      	if(currentWord.length > 5){
        	longestWords.push(currentWord);
        }
    }
    return longestWords;
}

console.log(longWords(['bike', 'skateboard','scooter'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
console.log(longWords(['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'])); //[]


// --------------YOUR CODE HERE-------------
//write a function: 
//mostWordsFive that should RETURN THE INDEX of the sub array
//that has the most words that are longer than 5 letters.
//MUST USE --> the longWords helper func to solve this problem.
//Look at example below for details.

// ------understand problem------
//input: 2d array
//output: expected number that represent the index

let mostWordsFive = function(twoDiArr){

}


let twoDList = [
  ['bike', 'skateboard','scooter'], 
  ['couscous', 'soup', 'ceviche', 'solyanka', 'taco'],
  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
]

 // answer is 1; because twoDList[1]  contains the subArray with the most 5+ letter words of ['couscous', 'ceviche', 'solyanka']
console.log("mostWordsFive(twoDList): " + mostWordsFive(twoDList));

