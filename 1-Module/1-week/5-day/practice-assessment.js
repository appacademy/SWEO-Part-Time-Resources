//understanding the problem INPUTS AND OUTPUTS
// stringChanger("foo", "capitalize") === "Foo"
// stringChanger("foo", "uppercase") === "FOO"
// stringChanger("foo", "double") === "foofoo"
// stringChanger("foo", "reverse") === "oof"
// stringChanger("foo", "unknown") === "foo"

function stringChanger(word, operation) {
    //if the operation is equal to "capitalize" (operation === "capitalize")
    if (operation === "capitalize") {
      //strategy: we want to capitalize the first letter
      //plan(HOW do we do that): 
  
      //get the first letter (firstLetter = word[0])
      let firstLetter = word[0];
      //capitalize first letter (capitalizedFirstLetter = firstLetter.toUpperCase())
      let capitalizedFirstLetter = firstLetter.toUpperCase();
      
      //we need rest of the body and combine it with our firstLetter (finalWord = firstLetter + word.slice(1))
      let finalWord = capitalizedFirstLetter + word.slice(1);
   
      console.log("capitalize:", finalWord); //Log it to see the output. (log word and then show how to debug with console.log)
      return finalWord;
    }
    else if (operation === "uppercase") {
      let uppercaseWord = word.toUpperCase();
      console.log("uppercase:", uppercaseWord);
      return uppercaseWord;
    }
    else if (operation === "double") {
      return word + word;
    }
    else if (operation === "reverse") {
      //take the word, and the reverse it????
      //HOW???? Go to MDN, type in reverse, see if anything catches your eye
      //let's take our string, change it to an array (let wordArr = word.split("");
      //lets take our wordArr and then reverse it (wordArr.reverse();)
      let wordArr = word.split("");
      wordArr.reverse();
      console.log("reverseWord:", wordArr);
      
      //convert our array to a string of all the letters to make the word( wordArr.join('');)
      let finalWord = wordArr.join('');
      console.log("FinalWord:", finalWord);
      return finalWord;
      
    }
    else {
      return word;
    }
  }
  
  // TESTS
  // DO NOT MODIFY ANYTHING BELOW THIS LINE
  
  let score = 0;
  
  if (stringChanger("foo", "capitalize") === "Foo") score++;
  if (stringChanger("foo", "uppercase") === "FOO") score++;
  if (stringChanger("foo", "double") === "foofoo") score++;
  if (stringChanger("foo", "reverse") === "oof") score++;
  
  if (stringChanger("foo", "unknown") === "foo") score++;
  
  console.log("You have scored " + score + "/5 points.");