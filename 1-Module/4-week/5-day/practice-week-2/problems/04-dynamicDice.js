/***********************************************************************
It's the weekend, and you're hanging out with your friends. Your friends decide
to play a game of dungeons and dragons. You are chosen to be the Game Master, it
is up to you to keep track of their dice rolls. You decide to write a
function, 'dynamicDice(sides)'. The 'dynamicDice' function should return a 'NEW FUNCTION',
that accepts a number representing the total rolls you get multiplied by the sides of the dice
from the first function. The returned function should return the maximum number you can get
based on the sides of the dice, and the amount of rolls you are allotted.
For example if you have a 20 sided die, and can only roll it once, the highest number
you can get is 20.

Assumptions:
You can be given the following dice types
20 sided, 12 sided, 10 sided, 8 sided, 6 sided, and 4 sided.

Examples:

const newDice = dynamicDice(20); // returns a function
newDice(5); // 100

const newDice2 = dynamicDice(10); // returns a function
newDice2(5); // 50

const newDice3 = dynamicDice(12); // returns a function
newDice3(2); // 24


***********************************************************************/

    // Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
  module.exports = dynamicDice;
} catch {
  module.exports = null;
}