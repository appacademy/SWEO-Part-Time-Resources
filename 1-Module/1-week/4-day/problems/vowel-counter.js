function countVowels(word) {
    let counter = 0;
    
    //we want to go through each letter in word, 
    //if letter is a vowel, add to counter + 1
    for(let i=0; i<word.length; i++){
        let letter = word[i]; //gives us the letter for each index
      if(letter === 'a'){
          counter += 1;
      }
      else if(letter === 'e'){
          counter +=1;
      }
      else if(letter === 'i'){
          counter +=1;
      }
      else if(letter === 'o'){
          counter +=1;
      }
      else if(letter ==='u'){
          counter +=1;
      }
    }
    //at the end, after finding all the vowels, return the total count
    return counter;
    
  };
  
  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2