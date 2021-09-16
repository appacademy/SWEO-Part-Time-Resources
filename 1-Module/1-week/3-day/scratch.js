/* EAST */
// console.log('tacos');
// console.log("tacos");
// console.log("What's up!");
// // console.log('What's up!') what??
// console.log('He said, "Hello"');
// console.log('He said, "What\'s up?');

// Length - property (a part of a data type that isn't a function)
// Length starts at 1... more later
// console.log("pizza".length);
// console.log("5 _.!asdf".length);

// Indexing
// 'dogs'
// // 0 - d, 1 - o, 2 - g, 3 - s
// 'dogs'.length // 4

// let animal = 'elephant';

// // console.log the letter h;
// console.log(animal[4]);

// //console.log the letter t;
// console.log(animal[animal.length - 1]);
// console.log(animal[-1]); // not in JS :'(

// indexOf - method (a part of a data type that is a function)
// let game = "Dota 2 is cool, dude";
// let o = ",";

// console.log(game.indexOf("t"));
// console.log(game.indexOf("x"));
// console.log(game.indexOf("o"));
// console.log(game.indexOf(" co"));
// console.log(game.indexOf("d"));
// console.log(game.indexOf(o))

// Concat - join
// let drink = 'coffee';
// let flavor = 'pumpkin';

// let fallDrink = flavor + " " + drink;

// console.log(fallDrink);

// let numOfCoffee = 3 + 1 + drink
// console.log(numOfCoffee);

// // String.toLowerCase()

// Functions!
function aName (optionalParams) {
  // may have a return value
}

// // declare a function called two that console.logs the number two
// function two () {
//    console.log(2);
//    return "Here is a string";
// }

// //Invoking functions
// console.log(two());

// declare a function called divide that intakes two numbers and returns the first
// number divided by the second number

// function divide (num1, num2) {
//   return num1 / num2;
// }

// console.log(divide(4,2)); // 2 let num1 = 4, let num2 = 2
// console.log(divide(6,2)); // 3

// function test(num1, num2) {
//   console.log(num1, num2)
//   return num1 + num2
// }

// console.log(test(1))

// too few args makes undefined
// too many args we don't care

/* WEST */

/*
Understand the problem
0 => 5
-1 => 4
3 => 8

Make a plan

Declare a function that will intake a number
  declare a variable called sum and set it to the num plus five
  return the sum
  
Carry out the plan

Look back and improve your solution
*/

// function plusFive(num) {
//   return num + 5;
// }

// console.log(plusFive(10));  // => 15
// console.log(plusFive(2));   // => 7
// console.log(plusFive(-8));  // => -3

/* 
Define a function called alphabetical that intakes two 
words and will return true if the first word comes before 
the second word in the dictionary, or false if it doesn't.

Understand the problem

cat, hat => true
cat, cat => false
Cat, cat => false
Cat, hat => true
hat, cat => false
zebra, fish => false

Make a Plan in Plain English

Define a function with two params
  lowercase each word and assign them to variables
  compare the two words
  return the comparison

Execute the plan


Review/Improve


*/
function alphabetical (word1, word2) {
  return word1.toLowerCase() < word2.toLowerCase();
}

console.log(alphabetical("cat", "hat")) //=> true
console.log(alphabetical("cat", "cat")) //=> false
console.log(alphabetical("Cat", "cat")) //=> false
console.log(alphabetical("Cat", "hat")) //=> true
console.log(alphabetical("hat", "cat")) //=> false
console.log(alphabetical("zebra", "fish")) //=> false



















