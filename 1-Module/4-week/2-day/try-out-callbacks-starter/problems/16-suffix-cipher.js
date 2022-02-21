/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/


// Standard For Loop Solution - This is fine, but try to work towards using advanced array methods
let suffixCipher = function (sent, obj) {
  // Split our string into an array of words
  let newSent = sent.split(' ');

  // Create an array for us to store our output
  let newArray = [];

  // Loop through our newSent Array
  for (let i = 0; i < newSent.length; i++) {

    // Keep track if we've found the suffix
		// If we find the suffix, we need to turn this to true
		// This tells us if we should push the unchanged word into the array
		// If hasSuffix === true, we only push the changed word
		// If hasSuffix === false, we only push the unchanged word
    let hasSuffix = false;

    // Loop through our object and check each key (each key is a suffix)
    for (let key in obj) {

      // If the current word ends with our key 
      if (newSent[i].endsWith(key)) {

        // Set function to a variable from our obj
				// Not required code, just for readability
        let myFunc = obj[key];

        // Invoke the function using the current word
				// Push the return of that function into our answer array
        newArray.push(myFunc(newSent[i]));

        // Update hasSuffix to true
				// We HAVE found a suffix and used its corresponding function
        hasSuffix = true;
      }
    }
		// If we have NOT found a suffix, which means we haven't modified our word
    if (!hasSuffix) {
			// So, we push the unchanged word directly into our answer array
      newArray.push(newSent[i]);
    }
  }
	// Join our answer array and return the string
  return newArray.join(' ');
};


// For Loop With Reassignment Solution
let suffixCipher = function (sent, obj) {
  // Split our string into an array
  let newSent = sent.split(' ');

  // Loop through our newSent Array
  for (let i = 0; i < newSent.length; i++) {

    // Set current word
    let currWord = newSent[i];

    // Loop through our object and check each key (each key is a suffix)
    for (let key in obj) {

      // If the current word ends with our key
      if (currWord.endsWith(key)) {

        // Set function from our obj to a variable
				// Not required code, just for readability
        let myFunc = obj[key];

        // Call the function invoked with the current word
				// Reassign the current word to the return of the function
        currWord = myFunc(currWord);
      }
    }
		// Reassign the word in our array with our current word
		// If we've reassigned currWord then it will be updated in our array
			// old word - quietly, new word - quietlee
		// If we didn't reassigned, this still runs, it just doesn't change anything
			// old word - and, new word - and
    newSent[i] = currWord;
  }
	// Join the original array and return the string
	// We return the original because there's no new array we've pushed into
	// Instead of pushing, we reassigned each element of the original array
  return newSent.join(' ');
};


// Advanced Array Method - Work towards understanding and writing code like this!
let suffixCipher = function (sent, obj) {
  // Split our string into an array of words
  let sentArr = sent.split(' ');

  // Get an array of all the suffixes
  let keys = Object.keys(obj);

  // Map over the sentence array
  // word is our current word in our array
  let newArr = sentArr.map(function (word) {

    // Look at each element in the keys array (each element is a suffix)
    keys.forEach(function (suffix) {

      // if our currWord ends with our current suffix
      if (word.endsWith(suffix)) {
        // console.log(word, 'our current word');
        // console.log(suffix, 'our current suffix');
        // console.log(obj[suffix], 'the function attached to our suffix');
        // console.log(obj[suffix](word), 'the return of the function with the word passed in');
        word = obj[suffix](word); // reassign our current word according to the function 
        // console.log(word, 'word has been changed');
      }
    });

    // return the word to our map function
    return word;
		// each word that gets returned to our map will be added to an array
    //that array will be saved into the newArr variable once the map completes
  });

  
  return newArr.join(' ');
};


// Advanced Array Method Solution - One Line Version
//***IMPORTANT NOTE***
// You are NOT expected to write code like this, nor even fully understand it yet
// Remove all the comments inside of this function before running it!
// Comments are to help you understand the code, but could cause errors for the one line
let suffixCipher = function (sent, obj) {
  // Split our string into an array of words
  return sent
    .split(' ')
  	// Map over the sentence array
  	// word is our current word in our array
    .map(function (word) {

			// Look at each key in the object (each key is a suffix)
      Object.keys(obj).forEach(function (suffix) {
      	
				// if our currWord ends with our current suffix
        if (word.endsWith(suffix)) {

					// reassign our current word according to the function
          word = obj[suffix](word);
        }
      });
    
			// return the word to our map function
      return word;
			// each word that gets returned to our map will be added to an array
    	//that array will be saved into the newArr variable once the map completes
    })
		// join the newArr together and return the string
    .join(' ');
		// This join will be the last that runs before returning
		// The return statement at the top "waits" for all of our code to run
		// At the end of sent.split(" ".map()), an array will be output
		// That array will be joined at the very end, then returned
		// Effectively, our code says
				// sent.split(' ').map().join(' ') then return
}













/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
