/***********************************************************************
Build a function called stringChanger() that takes in two arguments: a 
word and an operation. Based on the operation, your function will return 
the word modified in some way. The operations are:

"capitalize": Capitalize the first letter in the word.

"uppercase": Capitalize every letter in the word.

"double": Return the word twice in a row.

"reverse": Return the string with the letters in reverse order.

If the operation is invalid, return the word, unchanged.

This problem is worth 5 points. It is possible to get partial points on 
this problem.

Examples:
console.log(stringChanger("foo", "capitalize")) // "Foo"
console.log(stringChanger("foo", "uppercase")) // "FOO"
console.log(stringChanger("foo", "double")) // "foofoo"
console.log(stringChanger("foo", "reverse")) // "oof"
console.log(stringChanger("foo", "unknown")) // "foo"
************************************************************************/
// UNDERSTAND!

// will be given some word and an operation, based on the rules outlined in the
// prompt, we will return a new string following those set rules.
// PLAN:
// Build a logical structure that will check the value in operation. Based on 
// that value, generate a new string with the supplied rules. 
// Valid rules/operations are:
// -- capitalize
// -- uppercase
// -- double
// -- reverse

function stringChanger(word, operation) {
  // Your code here
  if (operation === "capitalize") {
    let letters = word.split("");
    letters[0] = letters[0].toUpperCase()
    return letters.join("");
  }
  else if (operation === "uppercase") return word.toUpperCase()
  else if (operation === "double") return word + word
  else if (operation === "reverse") return word.split("").reverse().join("")
  else return word;
}

// console.log(stringChanger("papaya", "reverse"))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = stringChanger;
} catch (e) {
  module.exports = null;
}