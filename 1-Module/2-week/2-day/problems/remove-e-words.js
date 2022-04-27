// your code here
// ---------understand the problem---------
//look at inputs and outputs
//inputs --> 'What time is it everyone?'
//output --> 'What is it'

//strings are immutable, so we can't directly mutate it.

//----------plan--------------
//1. define function
let removeEWords = function(sentence){
	//2. create an wordArr = strings.split(' ') --> array of all the words
  	let wordArr = sentence.split(' '); // --> ['what', 'time', 'is', 'it', 'everyone']
  
	//3. create a newArr = [] that will hold all the words that doesn't e.
  	let noEWords = [];
	//4. iterate through wordArr, get the word
  	for(let i=0; i<wordArr.length; i++){
      	let currentWord = wordArr[i];
    	//5. if the currentWord does not includes the letter e or E (!word.includes('e'))
      	if( !(currentWord.includes('e') || currentWord.includes('E'))){
        	//6. then add it to the newArr (newArr.push(word))	
          	noEWords.push(currentWord);
        }
  
    }

	//7. return newArr in string format (newArr.join(' '));
  	return noEWords.join(' ');

}



console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'