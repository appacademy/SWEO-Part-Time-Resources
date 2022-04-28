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

console.log(longWords(['bike', 'skateboard','scooter'])); // [ 'skateboard', 'scooter' ] --> all of these words are longer than 5 characters.
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
  //1. create indexOfLongestSubArr that holds the index of the current longest subarray
  let indexOfLongestSubArr = 0;

  //2. iterate over twoDiArr to find a subArr that is bigger than the current longest
  for(let i=1; i<twoDiArr.length; i++){
    //3. declare two variables, one currentSubArr and the other longestSubArr AFTER APPLYING the longestWords helper function
    let longestSubArr = longWords(twoDiArr[indexOfLongestSubArr]) //[ 'skateboard', 'scooter' ]
    let currentSubArr = longWords(twoDiArr[i]); // [ 'couscous', 'ceviche', 'solyanka' ]

    //4. compare which one has the longer length. The old longest or the new current sub array.
    if(currentSubArr.length > longestSubArr.length){
      indexOfLongestSubArr = i;
    }
  }

  //we now ahve the answer, longest sub array index.
  return indexOfLongestSubArr
}


let twoDList = [
  ['bike', 'skateboard','scooter'], //after applying longestWords, this then has only 2 items in the array --> ['skateboard', 'scooter']
  ['couscous', 'soup', 'ceviche', 'solyanka', 'taco'], //after applying longestWords, this then has 3 items in the array --> ['couscous', 'ceviche', 'solyanka']
  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'] //after we apply longestWords, how many items? --> 0
]

 // answer is 1; because twoDList[1]  contains the subArray with the most 5+ letter words of ['couscous', 'ceviche', 'solyanka']
console.log("mostWordsFive(twoDList): " + mostWordsFive(twoDList));

