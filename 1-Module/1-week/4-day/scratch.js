// ------------------Conditionals Demo-----------------

function getHeroQuote(hero){

  if (hero === 'Ironman'){
    console.log('That man is playing Galaga')
  } else if (hero === 'Thor'){
    console.log('I\'m the strongest avenger')
  } else if (hero === 'Spiderman'){
    console.log('With great power comes great responsibility')
  } else {
    console.log('What the heck, you\'re not a hero')
  }
}

getHeroQuote('Jordyn')

// -------------------While Loop Demo------------------

let i = 0;

while (i < 2) {
  console.log('Its less than two');
  i++;
};

// --------------------For Loop Demo-------------------

for (let i = 0; i < 2; i++){
  console.log('Its less than two')
}

// -------------------Array Demo------------------
let nums = [1,2,3];
let otherNums = [4,5,6];
console.log('using + to concatenate', nums + otherNums);
console.log('using .concat() method', nums.concat(otherNums))

nums.push(4);
console.log('after .push(4)', nums)
nums[0] = 0;
console.log('after reassigning array index 0',nums)
nums.pop();
console.log('after .pop', nums)
nums.unshift(1);
console.log('after .unshift', nums)
nums.shift();
console.log('after .shift', nums)
let copy = nums.slice(0,2);
console.log('after .slice', nums)
console.log('the copy that was created by slice', copy)
nums.splice(1, 2, 5, 6, 7, 8)
console.log('after .splice', nums)
console.log('-------------string immutability demo----------')
let string = 'dog';
console.log('original string',string)
string[0] = 'b'
console.log('after reassigning string index 0',string)
string = 'bog'
console.log('after reassigning string to new value',string)




// ----------------------Problems----------------------
// Choose the problem in the most recent set that was the hardest 
// and lets do it together!

// is Odd
function isOdd(num) {
  // if (num % 2 === 0) {
  // 	return false;
  // } else {
  //   return true;
  // }
  return num % 2 !== 0;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true

// Log Between
function logBetween(lowNum, highNum){
	// for (let i = lowNum; i <= highNum; i++){
	// console.log(i)
	// }
  	let i = lowNum;
  	while(i <= highNum) {
    	console.log(i);
      	i++
    }
}

// Examples:
logBetween(-1, 2); // prints out:
// -1
// 0
// 1
// 2

logBetween(14, 6); // => prints nothing

logBetween(4, 6); // prints out:
// 4
// 5
// 6

// Print Fives
function printFives(max){
	// for (let i = 0; i < max; i += 5){
	// console.log(i)
	// }
  	for (let i = 0; i < max; i++){
    	if (i % 5 === 0){
        	console.log(i);
        }
    }
}


// Example:

printFives(20) // prints out:
// 0
// 5
// 10
// 15

// Log Between Stepper
function logBetweenStepper(min, max, step){
	// for (min; min <= max; min += step){
	// console.log(min);
	// }
	// console.log(' ');
	let current = min;
  	while (current <= max){
    	console.log(current);
      	current += step;
    }
  console.log(' ')
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9


logBetweenStepper(-10, 15, 5)  // prints out:
// -10
// -5
// 0
// 5
// 10
// 15

// Sum Array
function sumArray(array) {
  let sum = 0;
  // iterate through each element in the array and add them together
  for (let i = 0; i < array.length; i++){
    let currentNum = array[i];
    sum += array[i]
  }
  // return the sum
return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

// Vowel Counter
function countVowels(word) {
  // create a count variable
  let count = 0;
  // iterate through my word
  for (let i = 0; i < word.length; i++){
  	// check if my character is a vowel
    let char = word[i];
    // if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
    // 	// if it is a vowel, i need to increment my count
    //   	count++
    // }
    // let vowels = 'aeiou';
    // if (vowels.includes(char)) {
    //   count++
    // }
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.indexOf(char) !== -1) {
    	count++
    }
  }
    // return my count
  return count
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2