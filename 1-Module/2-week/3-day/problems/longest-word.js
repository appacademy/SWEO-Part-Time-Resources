//1. define the longesetWords function
let longestWord = function(sentence){
	
    //2. split the sentence into an array of words
    let wordsArr = sentence.split(" "); // --> ['where', 'did', 'everyone', 'go'];
    
    //3. variable to keep track of the longest word
    let currentLongestWord = wordsArr[0]; //'where'
    
    //4. iterating through wordsArr, getting each word
    for(let i=1; i<wordsArr.length; i++){
        let currentWord = wordsArr[i];
      //5. if the currentWord is longer than currentLongestWord, 
      if(currentWord.length > currentLongestWord.length){
          //6. then we want to re-assign currentLongestWord with currentWord
            currentLongestWord = currentWord;
      }
    }
    //7. at the end after going through all the words and checking if there's something longer
    return currentLongestWord;
        
  }