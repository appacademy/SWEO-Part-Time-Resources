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

// let mostWordsFive = function(twoDiArr){
//   let lengths = [];
//   for(let i=0; i<twoDiArr.length; i++){
//     lengths[i] = longWords(twoDiArr[i]).length;
//   }
//   console.log("lengths:", lengths);  
	
//   let max = lengths[0];
//   let maxIndex = 0;
//   for(let i=0; i<lengths.length; i++){
//     if(lengths[i] > max){
//       max = lengths[i];
//       maxIndex = i;
//     }
//   }
//   return maxIndex;
// }

let mostWordsFive = function(twoDiArr){
  let indexOfLongestWords = 0; //represents the index of the current longest sub arr.
  for(let i=1; i<twoDiArr.length; i++){
    //define two variables one respresents the subArr, and other longestSubArr 
    //determine which is longer, the current subArr or the longestSubArr, AFTER we apply the longerWords helper function
    let subArr = longWords(twoDiArr[i]); //apply longWords helper --> ['bike', 'skateboard','scooter'] --> ['skateboard','scooter']
    let longestSubArr = longWords(twoDiArr[indexOfLongestWords]); //apply helper
    if(subArr.length > longestSubArr.length){
      indexOfLongestWords = i; //replace the previous indexOfLongestWords with the new index if it's length is bigger.
    }
  }
  return indexOfLongestWords;


}


let twoDList = [
  ['bike', 'skateboard','scooter'], 
  ['couscous', 'soup', 'ceviche', 'solyanka', 'taco'],
  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
]

 // answer is 1; because twoDList[1]  contains the subArray with the most 5+ letter words.
console.log("mostWordsFive(twoDList): " + mostWordsFive(twoDList));

