/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) {
  // your code here...
  let split = string.split('-')
  return split.reverse().join('-')
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseString;
