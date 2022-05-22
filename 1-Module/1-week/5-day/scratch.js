// this file is blank on purpose!// ------------Function Expression--------------

let addTwo = function(num1, num2){
  return num1 + num2;
};

// ------------semicolon demo-------------------

// let animal = 'dog';

// if (animal === 'turtle');{ // this semicolon here will terminate our condition, so the code block beneath will always run.
//   console.log('turtle');
// };

// --------------Mutability Demo----------------

// let wizard = 'Harry';
// let deathEaters = ['Bellatrix', 'Fenrir', 'Lucius', 'Barty'];
// console.log('the wizard', wizard);
// console.log('the array of bad guys', deathEaters);

// // If something is mutable, that means that it has the ability to be changed.
// // If something is immutable, that means that it cannot be changed.

// deathEaters[0] = 'Draco'; // you can update the value of an array this way
// console.log('after reassigning index 0', deathEaters);

// wizard[0] = 'B'; // you cannot change a string this way, must reassign that variable to a new string.
// console.log('after reassigning index 0', wizard);
// wizard = 'Hermione';
// console.log('after reassigning the value of wizard to a new value', wizard);

// let letters = 'abc';
// console.log('original string', letters);
// letters += 'd'; // letters = letters + d;
// console.log('new string (reassigned the value of the variable to a whole new string)', letters);

// let lettersArray = letters.split('');
// console.log('created an array out of the letters in the string', lettersArray);
// lettersArray.splice(1, 1, 'x', 'y');
// console.log('starting at index 1, deleted 1 element, added 2 elements', lettersArray);
// letters = lettersArray.join('');
// console.log('joined the letters back together to form a string again', letters);

// -------------Array Methods Demo--------------


// console.log('---- The following methods MUTATE the original array ----')
// console.log('-----.push-----')
// let arr = [1,2,3]
// console.log('original array:', arr)
// let newLengthAfterPush = arr.push('a', 'b', 'c')
// console.log('original array after we pushed:', arr)
// console.log('the return value of .push():', newLengthAfterPush)

// console.log('-----.pop-----');
// console.log('original array:', arr);
// let lastElement = arr.pop();
// console.log('original array after we popped:', arr);
// console.log('return value of .pop():', lastElement);

// console.log('-----.unshift-----');
// console.log('original array:', arr)
// let newLengthAfterUnshift = arr.unshift(0);
// console.log('original array after we unshifted:', arr)
// console.log('return value of .unshift():', newLengthAfterUnshift)

// console.log('-----.shift-----');
// console.log('original array:', arr);
// let firstElement = arr.shift();
// console.log('original array after we shifted:', arr);
// console.log('return value of .shift():', firstElement)



// -------------------Problems done together----------------

// --------- Pig Latin -----------

// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
  // check to see if the first character is a vowel, if it is then return that word + 'yay'
  let vowels = 'aeiou';
  let newWord = '';
  if (vowels.includes(word[0])) {
    return word + 'yay'
  };
  // iterate through the chars until I find the first vowel
  for (let i = 0; i < word.length; i++){
  	let char = word[i];
    if (vowels.includes(char)){
    	// slice the word before the vowel
      	let beginning = word.slice(0, i);
      	// slice the word after the vowel
      	let restOfWord = word.slice(i)
        // add 'ay'
        newWord = restOfWord + beginning + 'ay'
      	break // I only use break when I want my loop to stop and move on to the next line of code. 
    }
  }
  // return my new word
  return newWord;
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

// ---------- echo ----------

function echo(string) {
  let upper = string.toUpperCase();
  let lower = string.toLowerCase();
  console.log(upper + ' ... ' + string + ' ... ' + lower);
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"

// ------------ isPrime ------------

function isPrime(number){
	// if its less than 2 i know it prime, so i just want to return true;
  	if (number <= 2) {
      return true
    } 
  	// I want to divide the number by every number less than that number and see if it goes in without a remainder
  	for (let i = 2; i < number; i++){ // i start at 2 because i is the number i'm dividing by, not the number im trying to check to be prime. Prime numbers are divisible by 1 and themselves only, so starting at 2 is pretty important.
    	if (number % i === 0) {
          // return false if it is evenly divisible
        	return false;
        }
    }
  return true;	
}

console.log(isPrime(1)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true


